---
title: ActiveRecord &amp; Scopes that Perform
authors: Nathan Hopkins
date: 2013-08-14
published: true
categories:
  - ruby
  - rails
  - software
  - programming
layout: post
---

I'm currently using Rails with PostgreSQL and am taking advantage
of some advanced features within my named scopes.
Primarily [trigram](http://www.postgresql.org/docs/9.2/static/pgtrgm.html) text
comparisons and some [PostGIS](http://postgis.net) distance queries.

I have advanced scopes like this.

{% highlight ruby %}
scope :name_similar_to, -> (name, min_match=0.6) do
  where "similarity(lower(name), ?) >= ?",
    name.downcase,
    min_match
end

scope :close_to, -> (longitude, latitude) do
  where "ST_Within(lonlat::geometry, ST_Expand(ST_GeomFromText('POINT(? ?)', 4326), ?))",
    longitude,
    latitude,
    0.002
end

{% endhighlight %}

I also have simple scopes like this.

{% highlight ruby %}
scope :postal_code, -> (postal_code) do
  where(postal_code: postal_code.to_s.gsub(/\-/, ""))
end
{% endhighlight %}

Chaining scopes to create complex queries is one of the things I love about ActiveRecord... but be careful.

> ## Be mindful of the queries that ActiveRecord creates for you.

Consider the following query created by chaining these scopes together.

{% highlight ruby %}
Location
  .name_similar_to("Palo")
  .close_to(37.4419, 122.1419)
  .postal_code(94303)
  .to_sql

# SELECT "standard_hotels".*
# FROM "standard_hotels"
# WHERE "standard_hotels"."postal_code" = '94303'
# AND (similarity(lower(name), 'palo') >= 0.6)
# AND (ST_Within(lonlat::geometry, ST_Expand(ST_GeomFromText('POINT(37.4419 122.1419)', 4326), 0.002)))
{% endhighlight %}

On the surface this looks pretty good,
but in reality the performance is poor _(around 400ms with 100k records)_...
even though indexes exist in all the right places.

How might we improve performance?
Lets reduce the number of records similarity matching and distance comparisons need to be performed on.

{% highlight ruby %}
subquery = Location
  .select(:id)
  .postal_code(94303)
  .to_sql

Location
  .name_similar_to("Palo")
  .close_to(37.4419, 122.1419)
  .where("id in (#{subquery})")
  .to_sql

# SELECT "standard_hotels".*
# FROM "standard_hotels"
# WHERE (similarity(lower(name), 'palo') >= 0.6)
# AND (ST_Within(lonlat::geometry, ST_Expand(ST_GeomFromText('POINT(37.4419 122.1419)', 4326), 0.002)))
# AND (id in (SELECT id FROM "standard_hotels"  WHERE "standard_hotels"."postal_code" = '94303'))
{% endhighlight %}

That did it!
The query now runs in 60ms instead of 400ms.
Narrowing the initial results with a subquery yielded an 85% speed gain.

It's always a good idea to review the queries chained scopes are creating for you.

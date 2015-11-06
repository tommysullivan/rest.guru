rest.guru
=========

# Content Type Negotiation with rest.guru

Roy Fielding was purposefully silent on the type system that should be used to implement
Content Type Negotiation (CTN) in REST.

Much of the world uses MIME to designate the "Type" of representation that
they would like to use.

MIME-based content types have a format like this:

    Accept: application/json

Over time, REST services became popular, and leading companies like Github began to
incorporate "vendor-specific content types" and even "type versioning" into the
CTN aspect of their REST services offering beginning with version 3 of their
REST service offering.

This is a step in the right direction! But rest.guru exists to promote the *next*
step! Witness!

    Accept: rest.guru/types/mime/application/json

What is this? It is a URL string to express the content type. Imagine as a developer
that you are consuming a service and you hit an endpoint with a HEAD request. It will
tell you all the operations (POST, GET, etc) you can use on the resource. It will
also list the available Content Types. With rest.guru you can simply click the link
to see a human-readable example of the type, since its name is also a URL. In this
case we are just making an existing mime type more discoverable. But let's take a look
at other URL based types

    rest.guru/types/person

Here we have an example of a "Person" type that we at rest.guru might use. One can
click it to view a human readable description of that type.

    rest.guru/types/person; v~=1.5

Here we have provided a SEMVER qualifier to the Content Type. Now we can write clients
that couple to a specific version of a type that is known at the time of code authoring.
This helps eliminate the need to coordinate clients when the server changes the schema
of the type, which is one of the principle goals of REST to begin with.

# Dynamic Type System

So, we have established that URLs can be used for type identifiers in REST calls, and
that a human can navigate to those URLs to read more about the type.

    GET rest.guru/types/person
    Accept: text/html

But what about formal type systems that a program can read?

The thing about REST is that all URIs identify conceptual resources, independent of how
those resources might be represented. So when we say that a resource at
http://people.io/tommy can be retrieved using content type http://rest.guru/types/person,
we are saying that the content type itself is a REST resource, and that besides human
readable HTML, that type resource may have other representations.

    GET rest.guru/types/person
    Accept: application/json

So, when querying for a representation of the rest.guru/types/person resource itself, one
*also* performs Content Type Negotiation. In the human case, it is HTML because that is
what the browser requests. However, in a service architecture, we may choose to
represent a type using a formal schema - for example, json-ld, XML schema, a Java POJO declaration,
or something completely custom. In this example we request in generic application/json. So
we know the representation we get back is a JSON that describes what a Person type is.
Probably it would be better to ask for a representation of the Person type in a more
specific content type:

    GET rest.guru/types/person
    Accept: application/java; v=1.7

Above is an example of getting a representation of the type "rest.guru/types/person" using
content type negotiation, where the type is application/java, using version 1.7 of java.

# Versioning

We use ETAG to refer to the SEMVER of a given type resource. Here is an earlier example
written here for convenience:

    rest.guru/types/person; v~=1.5


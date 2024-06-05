package lakaypam

class Property {
    Illustration illustration
    Double latitude
    Double longitude
    User owner

    static hasMany = [illustrations: Illustration]

    static constraints = {
        illustration nullable : true, blank : false
        latitude : nullable : false, blank : false
        latitude : nullable : false, blank : false
        owner : nullable : false, blank : false
    }
}

package lakaypam

class Property {
    Illustration illustration
    Double latitude
    Double longitude
    String description
    Integer rooms
    PropertyType type
    User owner

    static hasMany = [illustrations: Illustration]

    static constraints = {
        illustration nullable : true, blank : false
        latitude : nullable : false, blank : false
        longitude : nullable : false, blank : false
        owner : nullable : false, blank : false
        descrition nullable:false, blank: false
        rooms nullable : true, blank : true
        type nullable:true, blank: true
    }
}

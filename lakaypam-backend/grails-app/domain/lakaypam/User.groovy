package lakaypam

class User {
    Profile profile

    static constraints = {
        profile nullable : true, blank : false
    }
}

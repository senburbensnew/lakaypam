package lakaypam

class User {
    String firstname
    String lastname
    String username
    String password
    String email
    Date dob
    Gender gender = Gender.OTHER
    Profile profile

    static constraints = {
        profile nullable : true, blank : false
    }
}

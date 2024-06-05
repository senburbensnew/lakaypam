package lakaypam

class Profile {
    User user

    static constraints = {
        user nullable : false, blank: false
    }
}

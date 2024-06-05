package lakaypam

class Profile {
    User user
    // To extend user class, other user property fields below 

    static constraints = {
        user nullable : false, blank: false
    }
}

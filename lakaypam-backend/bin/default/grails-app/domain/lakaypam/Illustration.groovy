package lakaypam

class Illustration {
    String name
    String filePath
    Date dateUploaded
    String thumbnailPath
    String mediumPath
    String largePath

    static constraints = {
        name nullable: false, blank: false, unique : true
        filePath nullable: true, blank: true
        thumbnailPath nullable: true, blank: true
        mediumPath nullable: true, blank: true
        largePath nullable: true, blank: true
        dateUploaded nullable: false
    }
}

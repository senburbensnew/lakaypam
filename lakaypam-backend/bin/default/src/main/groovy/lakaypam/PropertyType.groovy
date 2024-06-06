package lakaypam

enum PropertyType {
    appartment('appartment'),
    studio('studio')

    final String type

    private PropertyType(String type)
    {
        this.type = type
    }
}
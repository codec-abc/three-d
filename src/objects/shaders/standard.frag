
uniform vec3 color;

in vec3 nor;
in vec3 pos;

layout (location = 0) out vec4 out_color;
layout (location = 1) out vec4 position;
layout (location = 2) out vec4 normal;

void main()
{
    position = vec4(pos, 1.0);
    out_color = vec4(color, 1.0);
    normal = vec4(nor, 1.0);
}
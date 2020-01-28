from django import template


register = template.Library()


@register.filter(name='split')
def split(value, arg):
    value = value.replace('\r\n', '\n')
    arg = arg.replace('\\n', '\n')
    return value.split(arg)

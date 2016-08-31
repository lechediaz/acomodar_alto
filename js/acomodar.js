$(document).ready(function()
{
    var redimensionando = false;
    var contenedor = $('.contenedor-principal');
    var hijoA = contenedor.find('.a');
    var hijoB = contenedor.find('.b');

    $(window).resize(function(event)
    {
        if (!redimensionando)
        {
            redimensionando = true;
            setTimeout(function()
            {
                if (hijoA.height() > hijoB.height())
                {
                    hijoB.css('height', hijoA.height() + 'px');
                }
                else
                {
                    hijoA.css('height', hijoB.height() + 'px');
                }
                redimensionando = false;
            }, 900);
        }
        else
        {
            hijoA.css('height', 'auto');
            hijoB.css('height', 'auto');
        }
        
        console.log("TAMAÑO DE VENTA CAMBIO");
    });
});
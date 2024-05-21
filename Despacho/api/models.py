from django.db import models

# Create your models here.


class Despacho(models.Model):
    fecha_despacho = models.DateField( null=True)
    patente_camion = models.CharField(max_length=6,null=True)
    intento = models.IntegerField(default=0)
    entregado = models.BooleanField(null=True)
    id_compra = models.IntegerField(null=True)
    direccion_compra = models.CharField(max_length=80, null=True)
    valor_compra = models.IntegerField(null=True)

    class Meta:
        db_table = 'Despacho'


    def __str__(self):
        return f"Despacho ID:{self.pk}"


class Resumen_Despacho(models.Model):
    id_venta = models.IntegerField()
    id_despacho = models.IntegerField()

    class Meta:
        db_table = 'Resumen_Despacho'

    def __str__(self):
        return f"Resumen Despacho ID:{self.pk}"
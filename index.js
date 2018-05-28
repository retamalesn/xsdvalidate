var xsd = require('libxml-xsd');

const xml = require('fs').readFileSync('test.xml', 'utf-8')

xsd.parseFile('matrXmlSchema.xsd', function(err, schema) {
    schema.validate(xml, function(err, validationErrors) {
        if (validationErrors != null){
            for (var value of validationErrors) {
            	var arrayOfStrings = value.toString().split('.');
            	console.log(arrayOfStrings[0]);
            	if(arrayOfStrings[0].includes('is not expected')){
            		console.log('Hay un elemento no permitido');
            	}
            }
        }else{
            console.log('No hay errores');
        }
    });
});
## Funktioner i grund-delen:

Disse funktioner er allerede skrevet:

`start()` – kaldes ved load, sætter event listnere op  
`conversionChange()` – kaldes når conversion-type selectoren ændres, sender værdien direkte videre til selectConversion  
`inputChange()` – kaldes når input-value værdien ændres, sender værdien direkte videre til selectInput, såfremt den kan accepteres som et tal.

`selectConversion( conversion )` – kaldes med parameteren conversion, som er navnet på den ønskede type konvertering. Gemmer typen vha setConversionType, og viser input og output typer med displayInputUnit og displayOutputUnit. Kalder slutteligt performConversion.  
`selectInput( inputvalue )` – kaldes med parameteren inputvalue, som er den indtastede værdi der skal konverteres. gemmer værdien vha setInputValue, og kalder derefter performConversion.

`performConversion()` – kaldes uden parametre, henter type og inputværdi vha getConversionType og getInputValue, kalder convert med de to værdier, og udskriver det endelige resultat vha displayOutputValue.


_Disse funktioner skal tilføjes:_

1  
`setConversionType( conversion )` – gemmer parameteren typen af konvertering i en global variabel.  
`getConversionType()` – henter typen af konvertering fra en global variabel, og returnerer den.

2  
`setInputValue( inputvalue )` – gemmer parameteren inputværdien i en global variabel.  
`getInputValue()` – henter inputværdien fra en global variabel, og returnerer den.


## Funktioner i ui-delen:

Alle disse funktioner skal skrives:

3  
`displayInputUnit( conversion )` – skriver input enhedstypen ud for input-indtastningsfeltet. Får typenavnet fra getInputUnit funktionen.  
`getInputUnit( conversion )` – modtager typen af konvertering og returnerer enhedstypen for input i et pænt læseligt navn (for eksempel giver typen “inchToCm” navnet “inches”).

4  
`displayOutputUnit( conversion )` – skriver output enhedstypen ud for output-feltet. Får typenavnet fra getOutputUnit funktionen  
`getOutputUnit( conversion )` – modtager typen af konvertering og returnerer enhedstypen for output i et pænt læseligt navn (for eksempel giver typen “inchToCm” navnet “centimeter”).

5  
`displayOutputValue( value )` – modtager en værdi, og skriver den i outputfeltet, pænt afrundet til to decimaler.


## Funktioner i conversion-delen:

6  
`convert( type, value )` – modtager en konverterings-type (fx “inchToCm”) og en værdi der skal konverteres. Kalder den korrekte konverteringsfunktion med værdien, og returnerer resultatet.


_alle disse konverteringsfunktioner returnerer det omregnede resultat:_

7  
`inchToCm( inches )` – modtager inches, regner om til centimeter,  
`cmToInch( centimeters )` – modtager centimeter, regner om til inches

8  
`milesToKm( miles )` – modtager miles, regner om til kilometer  
`kmToMiles( kilometers )` – modtager kilometer, regner om til miles  

9  
`fToC( fahrenheit )` – modtager fahrenheit , regner om til celcius  
`cToF( celcius )` – modtager celcius , regner om til fahrenheit

10  
`feetToM( feet )` – modtager fod, regner om til meter  
`mToFeet( meters )` – modtager meter, regner om til fod

11  
`lbsToKg( pounds )` – modtager pund, regner om til kilo  
`kgToLbs( kilograms )` – modtager kilo, regner om til fod

12  
`gToL( gallons )` – modtager gallons, regner om til liter  
`lToG( liters )` – modtager liter, regner om til gallons 
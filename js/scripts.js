function getTriangleArea(a, h) {
	if ( (a <= 0) || (h <= 0) ) {
			console.log ("Nieprawidłowe dane, wartości muszą być dodatnie");
		}  else {
			console.log ("Prawidłowe dane");
		}
	return a*h/2;
}

console.log (getTriangleArea (10, 6));

var triangle1Area = getTriangleArea(10, 15);
console.log (triangle1Area);
var triangle2Area = getTriangleArea(7, 4);
console.log (triangle2Area);
var triangle3Area = getTriangleArea(12, 5);
console.log (triangle3Area);
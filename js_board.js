Escaping &, <, >, ", ', , !, @, $, %, (, ), =, +, {, }, [, and ] is almost enough


function isNegative0(x) {
   if (x!==0) return false;
   var obj=Object.freeze({z:-0});
   try {
      Object.defineProperty(obj,'z',{value:x});
   } catch (e) {return false};
   return true;
} 

$("#tableClassname").find('tbody')
    .append($('<tr>')
        .append($('<td>')
            .append($('<img>')
                .attr('src', 'img.png')
                .text('Image cell')
            )
        )
    );


$('#myTable tr:last').after('<tr>...</tr><tr>...</tr>');
$('#myTable > tbody:last').append('<tr>...</tr><tr>...</tr>');
$('#traffic tbody').find('tr.trafficBody' + idx).after(html);


------- JSTL EL -------------
${sessionScope.user.name} // bean or map
${bigFive[0]} // list or array

Reserved words
and   eq   gt   true   instanceof
or    ne   le   false  empty
not   lt   ge   null   div   mod

empty : empty operator is used to determine if a value is null or empty.
Conditional Operator:  w Evaluate B or C, depending on the result of the evaluation of A.

To evaluate empty A:
If A is null, return true,
Otherwise, if A is the empty string, then return true.
Otherwise, if A is an empty array, then return true.
Otherwise, if A is an empty Map, return true
Otherwise, if A is an empty Collection, return true,
Otherwise return false.
The “empty” keyword in JSTL will work for things like List, ArrayList, LinkedList, Vector, etc.
The “empty” keyword in JSTL will not work for Set, HashSet, TreeSet, etc.

EL Implicit Objects:EL Implicit Object	Desciption
pageContext	the PageContext object
pageScope	A map to attributes in page scope
requestScope	A map to attributes in request scope
sessionScope	A map to attributes in session scope
applicationScope	A map to attributes in application scope
initParam	A map for initialization of context parameters
param	A map from parameter name to one value
paramValues	A map from parameter name to all values
header	A map from header name to one value
headerValues	A map from header name to all values
cookie	A map from cookie name to one Cookie

---------------------------------------------------
function LinkedList() {
  this.head = null;
  this.tail = null;

  this.add = function(value) {
    var node = new Node(value);
    if (this.head == null) { this.head = node; }
    if (this.tail != null) { this.tail.next = node; }
    this.tail = node;
  };
}

function Node(value) {
  this.value = value;
  this.next = null;
}

var list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
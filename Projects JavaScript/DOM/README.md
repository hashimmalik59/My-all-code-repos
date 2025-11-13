# DOM

## 5 pillars of DOM

### 1. What is DOM?

#### A hierechy/tree like structure of HTML elements is DOM

### 2. How to select HTML elements?

#### <h1>Hello World</h1>

#### document.querySelector("h1");

### 3. How to manipulate HTML elements?

#### document.querySelector("h1").innerHTML = "h1 tag text is changed!"

### 4. How to manipulate/style HTML elements?

#### document.querySelector("h1").style.color = "red";

### 5. What is event listener, and how to use it?

#### i. Event => kuch action hona like: click, button press, mouse move.

#### ii. Listener => Sunna k kya hua button press hua ya click hua ya mouse move hua etc.

#### iii. Handler => Yani jo kaam hai woh perform karna hai like: click karne pe login karna, mouse enter pe hover karna, keypress pe game pe fire karna etc

#### document.querySelector("h1").addEventListener("click", function(){ console.log("h1 pe click hogaya hai!) })

## Advance DOM

### 1. NodeList[]

#### List of same nodes

#### document.querySelectorAll("li") -> return -> NodeList[]

#### Indexing: Allowed

#### Looping: Allowed but only on froEach()

#### Array: it's not totally array but little bit

### 2. HTMLCOllection[]

#### List hoti hai sirf HTML elements ki

#### getElementsByTagName() & getElementByClassName() se milta hai

#### Updates automatically

#### No comments, No text, not attribute, only tags

### getElementById()

#### Id wale element ko target karne k liye use hota hai

### querySelector()

#### id, class, tag ko select karne k liye use hota hai

##### Note: id k liye ("#name")

##### Note: class k liye (".name")

### firstChid()

#### Selecting first child of element

### lastChid()

#### Selecting last child of element

##### Note: agar beech mein se target karna ho to indexing k through kar sakte hain like: []

### Manipulating HTML

#### innerHTML: Is se hum text k saath HTML ko bhi manipulate kar sakte hain

#### innerText: Is se hum sirf text ko le aur set kar sakte hain, yani jo dikh raha hai woh hi milega

#### textContent: Is se hum jo text likha hua hai sab le sakte hain chahe hidden ho ya na ho

### Element

#### tag with content

### Tag

#### only tag syntax, just opening closing

### Creating a new element with JS

#### createElement("tagName")

### append()

#### yeh end mein insert karta hai

### prepend()

#### yeh start mein insert karta hai

### before()

#### yeh element k pehle insert karta hai

### after()

#### yeh element k baad insert karta hai

### Deletion of Element

#### node.remove()

### Replace child with element

#### Yeh method old child ko new child se replace karta hai

#### node.replaceChild(newChild, oldChild)

### remove()

#### yeh parent element ko remove karta hai

### removeChild()

#### yeh parent element k child ko remove karta hai

### Attribute

#### getAttrbute => is se hum attibute ko get kar sakte hain

#### setAttrbute => is se hum attibute ko set kar sakte hain

##### Note: getAttrbiute("attributeName") & setAttribute("attributeName", "attributeValues")

### ClassList

#### add() => is se hum class ko add karsakte hain

#### remove() => is se hum class ko remove karsakte hain

#### toggle() => is se hum class hata ya laga sakte hain

#### contains() => is se hum class dekh sakte hai agar class hai to true, agar nahi hai to false

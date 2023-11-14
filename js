
var genshin =[
    {    

        "Continent": "Mondstadt",
        "Element": "Anemo",
        "Reactions": "Swirl",
        "Archon": "Venti"
    },
    
    {
        "Continent": "Liyue",
        "Element": "Geo",
        "Reactions": "Crystalize",
        "Archon": "Zhongli"
    },
    
    {
        "Continent": "Inazuma",
        "Element": "Electro",
        "Reactions": "Electro",
        "Archon": "Raiden Ei"
    },
    
    {
        "Continent": "Sumeru",
        "Element": "Dendro",
        "Reactions": "HyperBloom",
        "Archon": "Nahida"
    },

    {
    
    
        "Continent": "Fontaine",
        "Elements": "Hydro",
        "Reactions": "Bloom",
        "Archon": "Focalors"
    }
]



var tbody = document.getElementsByTagName("tbody")[0]

genshin.forEach(function(v){
    var tr = document.createElement("tr")

    var td = document.createElement("td")
    td.innerHTMLu = v.Continent
    tr.appendChild(td)

    var td2 = document.createElement("td")
    td2.innerHTML = v.Element
    tr.appendChild(td2)

    var td3 = document.createElement("td")
    td3.innerHTML = v.Reactions
    tr.appendChild(td3)

    var td4 = document.createElement("td")
    td4.innerHTML = v.Archon
    tr.appendChild(td4)
   

    tbody.appendChild(tr)
})


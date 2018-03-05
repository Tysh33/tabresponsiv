new Vue ({
    el : "#root",
    data : {
        titre: "",
        resume: "",
        affect:"",
        client: "",
        search: "",
        displayModal : false,
        reverse: false,
        sortKey: 'Id',
        order: 'asc',
        gridColumns : [
            {
            display: "",
            },
            {
                display: "Id",
                field: "id"
            },
            {
                display: "Titre",
                field: "titre"
            },
            {
                display: "Résumé",
                field: "resume"
            },
            {
                display: "Affecté à",
                field: "affect"
            },
            {
                display: "Client",
                field: "client"
            },
            {
                display: "Etat",
                field: "etat"
            }],
        gridDatas: [
            { id: 'Chuck Norris', titre: 'Infinity', resume: "Americain", affect: "Paul", client:"Toto", etat: "En cours" },
            { id: 'Bruce Lee', titre: '9000', resume: "Chinois", affect: "Ken", client:"Tata", etat: "En cours"},
            { id: 'Jackie Chan', titre: '7000', resume: "Hongkongais", affect: "Boris", client:"Titi", etat: "En cours"},
            { id: 'Jet Li', titre: '8000', resume: "Chinois", affect: "Romain", client:"Tutu", etat: "En cours"}],
    },
    computed: {
        filteredData () {
            let results = this.gridDatas.sort(this.dynamicSort(this.sortKey))
            if (this.order === 'desc')
            {
                return results.reverse()
            }
            else {
                return results
            }
        },
        filteredCustomers:function()
        {
            let self = this
            return this.gridDatas
                .filter(function(cust){return cust.titre.toLowerCase().indexOf(self.search.toLowerCase())>=0})
                .filter(function(cust){return cust.resume.toLowerCase().indexOf(self.search.toLowerCase())>=0})
        },
    },
    methods: {
        dynamicSort(property) {
            let sortOrder = 1
            if(property[0] === "-") {
                sortOrder = -1
                property = property.substr(1)
            }
            return function (a,b) {
                var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0
                return result * sortOrder
            }
        },
        sortBy: function(sortKeys) {
            if (sortKeys === this.sortKey){
                if (this.order === 'desc'){
                    this.order = 'asc'
                }
                else {
                    this.order = 'desc'
                }
            }
            this.sortKey = sortKeys
        },
        toggleModal() {
            this.displayModal = !this.displayModal
            this.$refs.createform.reset()
        },
        getForm() {
            let item = {
                id: (this.gridDatas.length + 1).toString(),
                titre: this.titre,
                resume: this.resume,
                affect: this.affect,
                client: this.client,
                etat: "En cours",
            }

            this.gridDatas.push(item)
            this.displayModal = false
            this.$refs.createform.reset()
        },


        deleteForm() {
            console.log(this.gridDatas.length)
            for (i = this.gridDatas.length-1; i > 0; --i) {
                console.log("jkhkj")
                if (this.check === true)
                this.gridDatas.remove()
            }
        }
    }
})

let corps = document.getElementById("corps");
function test() {
    arrayColumns = document.getElementById("corps").rows
    for (i=arrayColumns.length; i >0; --i) {
        let j = i-1
        let checkState = document.getElementById("corps").rows[j].cells[0].childNodes[0].checked
        if (checkState == true) {
            corps.removeChild(corps.rows[j])
        }
    }
}



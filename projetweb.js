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
                display: "ID",
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
            { titre: 'Demande matériel', resume: "Demande souris pour le service achat suite au nouvel arrivant", affect: "Paul", client:"Service Achat", etat: "Terminé" },
            { titre: 'Problème horoquartz', resume: "Horoquartz n'est plus accessible, nous ne pouvons plus badger", affect: "Ken", client:"Service RH", etat: "En cours"},
            { titre: 'Répertoire partagé plus accessible', resume: "Le répertoire partagé share05 sur le serveur bdx-zr10 n'est plus accessible", affect: "Boris", client:"Service Appros", etat: "Terminé"},
            { titre: 'Demande de licences windows', resume: "De nouveaux alternants vont arriver, des licences windows vont être nécessaires", affect: "Romain", client:"Service Achat", etat: "En cours"}],
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
            this.titre = ""
            this.resume = ""
            this.affect = ""
            this.client = ""
        },
        getForm() {
            let item = {
                titre: this.titre,
                resume: this.resume,
                affect: this.affect,
                client: this.client,
                etat: "En cours",
            }
            this.gridDatas.push(item)
            this.toggleModal()
        },


        deleteForm() {
            for (let i = this.gridDatas.length - 1; i >= 0; i--) {
                if (this.gridDatas[i].del ) {
                    this.gridDatas.splice(i, 1)
                }
            }
        }
    }
})
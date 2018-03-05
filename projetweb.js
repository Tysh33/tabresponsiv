new Vue ({
    el : "#root",
    data : {
        titre: "",
        resume: "",
        affect:"",
        client: "",
        displayModal : false,
        gridColumns : ["","ID","Titre","Résumé","Affecté à","Client","Etat"],
        gridDatas: [
            { ID: 'Chuck Norris', Titre: Infinity, Resume: "Americain", Affect: "Paul", Client:"Toto", Etat: "En cours" },
            { ID: 'Bruce Lee', Titre: 9000, Resume: "Chinois", Affect: "Ken", Client:"Tata", Etat: "En cours"},
            { ID: 'Jackie Chan', Titre: 7000, Resume: "Hongkongais", Affect: "Boris", Client:"Titi", Etat: "En cours"},
            { ID: 'Jet Li', Titre: 8000, Resume: "Chinois", Affect: "Romain", Client:"Tutu", Etat: "En cours"}],
    },
    methods: {

        toggleModal() {
            this.displayModal = !this.displayModal
            console.log(this.$refs.createform)
            this.titre = ""
            this.resume = ""
            this.affect = ""
            this.client = ""
        },

        getForm() {
            let item = {
                ID: this.gridDatas.length + 1,
                Titre: this.titre,
                Resume: this.resume,
                Affect: this.affect,
                Client: this.client,
                Etat: "En cours",
            }

            this.gridDatas.push(item)
            this.displayModal = false
            this.$refs.createform.reset()
        },

        deleteForm() {
            console.log(this.check.checked)
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



<template>
    <div 
        class="entry-tittle d-flex justify-content-between p-2">
        <div>
            <span class="text-sucess fs-3 fw-bold">{{ day }}</span>
            <span class="mx-1 fs-3">{{ month }}</span>
            <span class="mx-2 fs-4 fw-light">{{ yearDay }}</span>
        </div>
        <!--  -->
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary ">
                Subir Foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
        <!--  -->
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea 
            placeholder="Escribe aqui..."
            v-model="entry.text"
        ></textarea>
    </div>
    <Fab 
        icon="fa-save"
        @on:click="saveEntry"
    />
    <img 
        src="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg"
        alt="entry-picture"
        class="img-thumbnail"
    />
</template>
<script>

import { defineAsyncComponent } from 'vue'
import { mapGetters, mapActions } from 'vuex';
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
    props: {
        id:{
            type: String,
            required: true,
        }
    },
    components: {
        Fab : defineAsyncComponent( () => import('../components/Fab.vue')),
    },
    data() {
        return {
            entry: null,
        }
    },
    computed: {
        ...mapGetters('journal',['getEntriesById']),
        day (){
            const { day } = getDayMonthYear( this.entry.date )
            return day
        },
        month() {
            const { month } = getDayMonthYear( this.entry.date )
            return month
        },
        yearDay(){
            const { yearDay } = getDayMonthYear( this.entry.date )
            return yearDay
        }
    },
    created() {
        this.loadEntry()
        
    },
    methods: {
        ...mapActions('journal',['updateEntry']),

        async saveEntry() {
            const entry = this.entry
            if( this.entry.id ){
                await this.updateEntry( entry )
            } else {
                console.log('nuevaentrada')
            }
            
            
        },
        loadEntry() {
            let entry
            if ( this.id == 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntriesById( this.id )
                if ( !entry ) return this.$router.push({ name: 'no-entry' })
            }
            
            this.entry = entry
        }
    },
    watch: {
        id( ) {
            this.loadEntry()
        }
    }
    

}
</script>
<style lang="scss" scoped>

textarea {
    font-size: 20px;
    border: none;
    height: 100%;
    resize: none;
    &:focus {
        outline: none;
    }    
}
img {
    width: 250px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>

<template>
  <v-row>
    <v-col class="text-center">
      <v-select
        :label="$t(type)"
        id="type" ref="type"
        :items="[{title : 'slider' , value : 0},{title : 'home_banner' , value : 1}]"
        :item-text="title"
        :item-value="value"
        v-model="form.type"
        outlined
        dense
      ></v-select>
      <v-file-input
        :label="$t(image)"
        id="iamge" ref="iamge"
        v-model="form.image"
        outlined
        dense
      ></v-file-input>
      <v-btn color="primary" @click.prevent="submit">{{$t('submit')}}</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import Http from "@/common/Http.js";

export default {
  data(){
    // // const opts = new DatatableDirector(DatatableBuilder()).makeDocuments()
   
    return {
      form : {
        image : '',
      }
    }
  },
  methods:{
    submit(){
      let formData = new FormData()
      // console.log(this.form.image)
      // console.log(this.form.images[0])
      formData.append("image", this.form.image);
      Http.post( `/banners/create/${this.form.type}`,
      formData,
      {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(()=>{
        this.$router.push({name :'banners'})
      })
      .catch(()=>{
        console.log('FAILURE!!');
      });
    }
  }
}
</script>
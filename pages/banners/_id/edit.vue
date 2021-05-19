
<template>
  <v-row>
    <v-col class="text-center">
      <v-file-input
        label="Image"
        id="iamge" ref="iamge"
        v-model="form.image"
        outlined
        dense
      ></v-file-input>
      <v-btn color="primary" @click.prevent="submit">Submit</v-btn>
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
      Http.post( `/banners/edit/${this.$route.params.id}`,
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
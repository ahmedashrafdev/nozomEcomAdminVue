
<template>
  <v-row>
    <v-col class="text-center">
      <v-file-input
        :label="$t('image')"
        id="iamge" ref="iamge"
        v-model="form.image"
        outlined
        dense
      ></v-file-input>

      <v-file-input
        show-size
        multiple
        counter
        :label="$t('images')"
        id="images" ref="images"
        v-model="form.images"
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
        images : [],
      }
    }
  },
  methods:{
    handleFileUpload(){
      // this.file = this.$refs.file.files[0];
      let formData = new FormData()
      formData.append("image", this.file)

      console.log(formData)

      Http.post( `/products/edit/${this.$route.params.id}`,
      formData,
      {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      }
    ).then(()=>{
      const snackbar = {
          active : true,
          text: 'Image Uploaded successfully'
      }
      thid.commit('ui/setSnackbar' , snackbar)
    })
    .catch(()=>{
      console.log('FAILURE!!');
    });
    },
    submit(){
      let formData = new FormData()
      // console.log(this.form.image)
      // console.log(this.form.images[0])
      formData.append("image", this.form.image);
      this.form.images.forEach(img => {
        formData.append( 'images[]',img)
      })
      Http.post( `/products/edit/${this.$route.params.id}`,
      formData,
      {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      ).then(()=>{
        
        this.$router.push({name :'products'})
      })
      .catch(()=>{
        console.log('FAILURE!!');
      });
      this.form.images.forEach(img => {
        
      })
    }
  }
}
</script>
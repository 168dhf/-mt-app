<template>
  <div class="m-menu">
      <dl class="nav" @mouseleave="mouseleave">
          <dt>全部分类</dt>
          <dd v-for="(item, index) in $store.state.home.menu" :key="index" @mouseenter="mouseenter">
              <i :class="item.type"/>{{item.name}}<span class="arrow"/>
          </dd>
      </dl>
      <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="leave">
          <template v-for="(item, index) in curdetail.child">
              <h4 :key="index">{{item.title}}</h4>
              <span v-for="v in item.child" :key="v">{{v}}</span>
          </template>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            kind:'',
            menu:[
                {
                    type:"food",
                    name:'美食',
                    child:[{
                        title:'美食',
                        child:['代金劵','甜点饮品','火锅','自助餐','小吃快餐'],
                    },{
                        title:'美食11111',
                        child:['代金劵1','甜点饮品1','火锅1','自助餐1','小吃快餐1']
                    }]
                },
                {
                    type:'takeout',
                    name:'外卖',
                    child:[{
                        title:'外卖',
                        child:['美团外卖']
                    }]
                },
                {
                    type:'hotel',
                    name:'酒店',
                    child:[{
                        title:'酒店星级',
                        child:['经济型','舒适/三星','高档/四星','豪华/五星']
                    }]
                }
            ]
        }
    },
    mounted(){
        console.log('我是',this.$store)
    },
    computed: {
        curdetail:function(){
            console.log(this.menu.filter((item)=>item.type===this.kind)[0])
            return this.$store.state.home.menu.filter((item)=>item.type===this.kind)[0];
        }
    },
    methods:{
        mouseleave:function(){
            let self = this;
            self._timer=setTimeout(function(){
                self.kind='';
            },150)
        },
        mouseenter:function(e){
            console.log(e)
            this.kind=e.target.querySelector('i').className
            console.log(this.kind)
        },
        sover:function(){
            clearTimeout(this._timer);
        },
        leave:function(){
            this.kind=''
        }
    }

}
</script>

<style lang="scss">

</style>
<template>
 <div>
   <canvas id="canvas" class="canvas">
   </canvas>
   <div>
     <button @click="clear">清除</button>
     <button @click="save">保存</button>
   </div>
 </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {
      canvas:null,
      ctx:null
    }
  },
  props:{},
  methods:{
    init(){
      this.canvas=document.getElementById("canvas")
      // 获取API
      this.ctx=this.canvas.getContext('2d')
      this.ctx.lineCap='round'//线条端点样式
      this.ctx.fillStyle='pink'//填充颜色
      this.ctx.lineWidth=4//线条宽度
      this.ctx.fillRect(0,0,300,300)//填充矩形，参数起点x,y轴及宽高，此处作为背景填充
      let startX =0, startY =0;
      
      
        
      // 监听touchstart事件
      this.canvas.addEventListener("touchstart",(e)=>{
    this.ctx.beginPath()
        startX = e.changedTouches[0].pageX;
        startY = e.changedTouches[0].pageY;
        this.ctx.moveTo(startX,startY)
      })
      // 监听touchmove事件
      this.canvas.addEventListener("touchmove",(e)=>{
       this.ctx.lineTo(e.changedTouches[0].pageX,e.changedTouches[0].pageY)
        this.ctx.stroke()//路径描边
      })
      },
      clear(){
        this.ctx.clearRect(0,0,300,300)//清除签名
        this.ctx.fillStyle='pink'//重新填充颜色
        this.ctx.fillRect(0,0,300,300)//填充矩形，参数起点x,y轴及宽高，此处作为背景填充
      },
      save(){

      }
    },
  watch:{},
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){
    this.init()
  },
  beforeUpdate(){},
  updated(){},
  beforeDestroy(){},
  destroyed(){},
  computed:{},
  components:{},
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .canvas{
    width: 200px;
    height: 100px;
    border: 1px solid salmon;
  }
</style>
<template>
  <div class="container">
        <div class="header"> 
                <span class="floor">{{inspectionData[index].floor}}楼</span>
                <span class="brand-name">{{inspectionData[index].brandName}}</span>  
        </div>
        <div class="inspection-container">
            <div class="left">
                <div id="left-title">安全隐患整改情况</div>
                <div class="done">
                    <div class="item" v-for="(item,index) in inspectionDone" :key="index">
                        <div class="title">{{item.description}}(已整改)</div>
                        <div class="image">
                            <div class="image-1">        
                                <img :src="item.imagesUrl">
                                <span>整改前</span>
                            </div>
                            <div class="image-2">                          
                                <img :src="item.imagesUrlDone">
                                <span>整改后</span>
                            </div>
  
                        </div>
                    </div>
                </div>
                <div class="undone" v-for="(item,index) in inspectionUnDone" :key="index">
                    <span>{{item.description}}(未整改)</span>
                    <img :src="item.imagesUrl">
                </div>
            </div>
            <div class="right">
                <div id="right-title">4月份安全检查情况</div>
                <div v-for="(ins,index) in inspectionNew" :key="index">
                    <img :src="ins.imagesUrl">
                    <div>安全隐患:{{ins.description}}</div>
                </div>
                
        </div>
        </div>
        <div class="btn">
            <button class="left" @click="gopre">上一页</button>
            <button class="right" @click="gonext">下一页</button>
        </div>
  </div>
</template>

<script>
import inspectionData from './insRecord';
export default {
    data(){
        return {
            inspectionData,
            index:0
        }
    },
    methods: {
        gonext() {
            this.index === this.inspectionData.length - 1
              ? (this.index = 0)
              : this.index++;
          },
        gopre(){
            this.index === 0?
             (this.index = this.inspectionData.length - 1)
              : this.index--;
        }
    },
    computed:{
        inspectionNew(){
            const filData = this.inspectionData[this.index].insData.filter((item)=>{
                return item.insDate === 'm4' && item.done === false
            })
            return filData 
        },
        inspectionDone(){
            const filData = this.inspectionData[this.index].insData.filter((item)=>{
                return item.insDate === 'm3' && item.done === true
            })
            return filData
        },
        inspectionUnDone(){
            const filData = this.inspectionData[this.index].insData.filter((item)=>{
                return item.insDate === 'm3' && item.done === false
            })
            return filData
        }
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
    }
    .container img {
        width: 100%;
    }
    .container .header {
        display: flex;
        justify-content: space-between;
        height: 20px;
        font-size: 20px;
        line-height: 20px;
        margin-bottom: 10px;
        padding: 5px 0;
        font-weight: bold;
        border-bottom: 2px solid #007acc;
    }
    .container .inspection-container {
        display: flex;
        flex-direction: row;
        height: 80vh;
    }
    .container .inspection-container .left {
        background-color: #eef6fb;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 480px;
        flex-grow: 1;
        overflow: scroll;
    }
    .container .inspection-container .left .done {
        display: flex;
    }
    .container .inspection-container .left .undone {
        margin-top: 30px;
        text-align: center;
        color: #fff;
    }
    .container .inspection-container .left .undone span {
        display: block;
        margin-bottom: 5px;
        padding: 5px 0;
        background-color: #7f0211;
    }
    .container .inspection-container .left .done .item {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .container .inspection-container .left .done .item .title {
        margin-bottom: 20px;
        padding: 5px 0;
        background-color: #135231;
        color: #fff;
        text-align: center;
    }
    .container .inspection-container .left .done .item .image {
        display: flex;
        justify-content: space-around;
    }
    .container .inspection-container .left .done .item .image .image-1, .image-2 {
        display: flex;
        flex-direction: column;
        text-align: center;

    }
    .container .inspection-container .left .done .item  img {
        width: 200px;
    }
    .container .inspection-container .right {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #fffbf2;
        width: 480px;
        flex-grow: 1;
        overflow: scroll;
        text-align: center;
    }
    .container .inspection-container .right img {
        width: 80%;
    }
    #left-title {
        font-size:26px;
        font-weight:bold;
        text-align: center;
        margin: 20px 0px;
    }
    #right-title {
        font-size:26px;
        font-weight:bold;
        text-align: center;
        margin: 20px 0px;
    }
</style>
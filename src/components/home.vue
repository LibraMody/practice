<template>
<div>
    <div>
        <p>success！</p>
        <button @click="back_click('ok', $event)">back</button>
    </div>
    
    <div class="card" v-for="card in cards" :key="card.id">
        <div class="title" v-text="card.name"></div>
        <div class="content">
            <ul>
                <li v-for="list in card.lists" :key="list.id">
                    <div class="line" v-text="list.tag"></div>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<style>
.card {
    width: 240px;
    text-align: center;
    display: inline-block;
    background-color: dodgerblue;
}
.card .title {
    vertical-align: middle;
    font-size: 18px;
    color: antiquewhite;
    height: 35px;
}
.content {
    background-color: gainsboro;
    border: 1px solid green;
}
.content .list {
    font-size: 17px;
    color: beige;
}
.content li {
    display: block;
    color: aliceblue;
    text-align: left;
}
.content .line {
    margin-bottom: 10px;
}
</style>

<script>
export default {
    props: {
        isBack: {
            type: Boolean,
            default: false
        }
    },

    data() { return {

    };},

    methods: {
        back_click(message = '', event) {
            this.$emit('update:isBack', !this.isBack);
            this.$router.push({ name: 'login'});
        },
        cheack_link() {
            this.router.push({ name: ''})
        }
    },

    data() { return {
        cards: [
            { 
                name: '日记 ',
                id: 'edit_diary',
                lists: [
                    { tag: '周一', id: 'diary_first' },
                    { tag: '周二', id: 'diary_two' },
                    { tag: '周三', id: 'diary_three' },
                    { tag: '周四', id: 'diary_four' },
                    { tag: '周五', id: 'diary_five' },
                ]
            },
            {
                name: '笔记',
                id: 'edit_note',
                lists: [
                    { tag: '周一', id: 'note_first' },
                    { tag: '周二', id: 'note_two' },
                    { tag: '周三', id: 'note_three' },
                    { tag: '周四', id: 'note_four' },
                    { tag: '周五', id: 'note_five' },
                ]
            },
            {
                name: '便签' ,
                id: 'edit_memo',
                lists: [
                    { tag: '周一', id: '' },
                    { tag: '周二', id: '' },
                    { tag: '周三', id: '' },
                    { tag: '周四', id: '' },
                    { tag: '周五', id: '' },
                ]
            },
            {
                name: '文章' ,
                id: 'edit_essay',
                lists: [
                    { tag: '周一', id: '' },
                    { tag: '周二', id: '' },
                    { tag: '周三', id: '' },
                    { tag: '周四', id: '' },
                    { tag: '周五', id: '' },
                ]
            }
        ]
    }; }
}
</script>
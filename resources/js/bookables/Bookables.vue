<template>
	<div>
		 
		<div v-if="loading">Data is Loading ...</div>
		<div v-else>
			<div class="row mb-4" v-for="row in rows" :key="'row' + row">
				<div class="col d-flex align-item-stretch" v-for="(bookable , column) in bookableInRow(row)" :key="'row' + row + column">
					<BookableListItem :item-title='bookable.title' :item-description='bookable.description' :price='1000'></BookableListItem>
				</div>
				<div class="col" v-for="p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
			</div>


			
		</div>
	</div>
</template>

<script>
	import BookableListItem from './BookableListItem';
	export default {
		components: {
			BookableListItem,
		},
		data(){
			return {
				bookables: null,
				loading : false,
				columns : 3,
			}
		},
		computed: {
			rows(){
				return this.bookables == null ? 0 : Math.ceil(this.bookables.length/this.columns);
			}
		},
		methods: {
			bookableInRow(row){
				return this.bookables.slice((row-1) * this.columns , row * this.columns);
			},
			placeholdersInRow(row){
				// to print the un used space 
				return this.columns -  this.bookableInRow(row).length;
			}
		},
		created(){
			this.loading = true;

			const p = new Promise((resolve, reject)=>{
				console.log(resolve);
				console.log(reject);
				setTimeout(()=>resolve("Hello"),3000);
			})
			.then(result => "Hello Again " + result)
			.then(result =>  console.log(result))  ///
			//.catch(result => console.log('error ' + result))
			.catch(result => console.log(`error ${result}` ))
			;

			console.log(p);

			const request = axios.get('/api/bookables').then(response=>{
				this.bookables = response.data;
				this.loading = false;
			});
			 

			

		},
 
	}
</script>
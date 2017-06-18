
export default function CompileAndRun(state={},action){

	if(action.type=='run')
	{
		console.log(JSON.parse(action.payload));

		return state=JSON.parse(action.payload);

	}	


	return state;


}
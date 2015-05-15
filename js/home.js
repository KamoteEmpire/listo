var preMonitorCompletion=0;
var preMonitorCounter=parseInt(localStorage.getItem("localPreMonitorCounter"));
var preMonitorTotal=149;
var preMonitorPercentage=parseInt(localStorage.getItem("localPreMonitorPercentage"));


$(document).ready(function(){
	
			$("#txtPreMonitorCounter").text(preMonitorCounter);
			$("#txtPreMonitorTotal").text(preMonitorTotal);
			$("#txtPreMonitorPercentage").text(preMonitorPercentage);
			$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Ready");
			$('#preMonitorMeter').val(preMonitorCounter);
//checking if the checkbox is checked

for(var aCounter=0;aCounter<5;aCounter++){
	var aName='preMonitor-a-';
	var aNodeName='#preMonitor-a-';
	if(localStorage.getItem(aName+aCounter)<1){
			$(aNodeName+aCounter).prop('checked',false);
			var alocalHidden = '#hidden'+aName+aCounter;
			$(alocalHidden).val(localStorage.getItem(aName+aCounter));
		}
	else{
			$(aNodeName+aCounter).prop('checked',true);
			var alocalHidden = '#hidden'+aName+aCounter;
			$(alocalHidden).val(localStorage.getItem(aName+aCounter));
		}
}

for(var bCounter=0;bCounter<11;bCounter++){
	var bName='preMonitor-b-';
	var bNodeName='#preMonitor-b-';
	if(localStorage.getItem(bName+bCounter)<1){
			$(bNodeName+bCounter).prop('checked',false);
			var blocalHidden = '#hidden'+bName+bCounter;
			$(blocalHidden).val(localStorage.getItem(bName+bCounter));
		}
		else{
			$(bNodeName+bCounter).prop('checked',true);
			var blocalHidden = '#hidden'+bName+bCounter;
			$(blocalHidden).val(localStorage.getItem(bName+bCounter));
		}
}

for(var cCounter=0;cCounter<24;cCounter++){
	var cName='preMonitor-c-';
	var cNodeName='#preMonitor-c-';
	if(localStorage.getItem(cName+cCounter)<1){
			$(cNodeName+cCounter).prop('checked',false);
			var clocalHidden = '#hidden'+cName+cCounter;
			$(clocalHidden).val(localStorage.getItem(cName+cCounter));
		}
		else{
			$(cNodeName+cCounter).prop('checked',true);
			var clocalHidden = '#hidden'+cName+cCounter;
			$(clocalHidden).val(localStorage.getItem(cName+cCounter));
		}
}

for(var dCounter=0;dCounter<18;dCounter++){
	var dName='preMonitor-d-';
	var dNodeName='#preMonitor-d-';
	if(localStorage.getItem(dName+dCounter)<1){
			$(dNodeName+dCounter).prop('checked',false);
			var dlocalHidden = '#hidden'+dName+dCounter;
			$(dlocalHidden).val(localStorage.getItem(dName+dCounter));
		}
		else{
			$(dNodeName+dCounter).prop('checked',true);
			var dlocalHidden = '#hidden'+dName+dCounter;
			$(dlocalHidden).val(localStorage.getItem(dName+dCounter));
		}
}

for(var eCounter=0;eCounter<15;eCounter++){
	var eName='preMonitor-e-';
	var eNodeName='#preMonitor-e-';
	if(localStorage.getItem(eName+eCounter)<1){
			$(eNodeName+eCounter).prop('checked',false);
			var elocalHidden = '#hidden'+eName+eCounter;
			$(elocalHidden).val(localStorage.getItem(eName+eCounter));
		}
		else{
			$(eNodeName+eCounter).prop('checked',true);
			var elocalHidden = '#hidden'+eName+eCounter;
			$(elocalHidden).val(localStorage.getItem(eName+eCounter));
		}
}

for(var fCounter=0;fCounter<3;fCounter++){
	var fName='preMonitor-f-';
	var fNodeName='#preMonitor-f-';
	if(localStorage.getItem(fName+fCounter)<1){
			$(fNodeName+fCounter).prop('checked',false);
			var flocalHidden = '#hidden'+fName+fCounter;
			$(flocalHidden).val(localStorage.getItem(fName+fCounter));
		}
		else{
			$(fNodeName+fCounter).prop('checked',true);
			var flocalHidden = '#hidden'+fName+fCounter;
			$(flocalHidden).val(localStorage.getItem(fName+fCounter));
		}
}

for(var gCounter=0;gCounter<6;gCounter++){
	var gName='preMonitor-g-';
	var gNodeName='#preMonitor-g-';
	if(localStorage.getItem(gName+gCounter)<1){
			$(gNodeName+gCounter).prop('checked',false);
			var glocalHidden = '#hidden'+gName+gCounter;
			$(glocalHidden).val(localStorage.getItem(gName+gCounter));
		}
		else{
			$(gNodeName+gCounter).prop('checked',true);
			var glocalHidden = '#hidden'+gName+gCounter;
			$(glocalHidden).val(localStorage.getItem(gName+gCounter));
		}
}

for(var hCounter=0;hCounter<40;hCounter++){
	var hName='preMonitor-h-';
	var hNodeName='#preMonitor-h-';
	if(localStorage.getItem(hName+hCounter)<1){
			$(hNodeName+hCounter).prop('checked',false);
			var hlocalHidden = '#hidden'+hName+hCounter;
			$(hlocalHidden).val(localStorage.getItem(hName+hCounter));
		}
		else{
			$(hNodeName+hCounter).prop('checked',true);
			var hlocalHidden = '#hidden'+hName+hCounter;
			$(hlocalHidden).val(localStorage.getItem(hName+hCounter));
		}
}

for(var iCounter=0;iCounter<36;iCounter++){
	var iName='preMonitor-i-';
	var iNodeName='#preMonitor-i-';
	if(localStorage.getItem(iName+iCounter)<1){
			$(iNodeName+iCounter).prop('checked',false);
			var ilocalHidden = '#hidden'+iName+iCounter;
			$(ilocalHidden).val(localStorage.getItem(iName+iCounter));
		}
		else{
			$(iNodeName+iCounter).prop('checked',true);
			var ilocalHidden = '#hidden'+iName+iCounter;
			$(ilocalHidden).val(localStorage.getItem(iName+iCounter));
		}
}



			

//saving stuff to localStorage			
			$('#preMonitor-a-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});

			$('#preMonitor-a-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-a-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-a-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			//end PreMonitor A
			
			$('#preMonitor-b-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-b-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			//end of B Monitor
			
			$('#preMonitor-c-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-11').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-12').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-13').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-14').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-15').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-16').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-17').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-18').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-19').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-20').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-21').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-22').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-c-23').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			//end of C
			
			$('#preMonitor-d-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-11').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-12').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-13').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-14').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-15').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-16').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-d-17').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			//end D
			
			$('#preMonitor-e-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-11').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-12').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-13').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-e-14').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			//end of E
			$('#preMonitor-f-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-f-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-g-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-g-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-g-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-g-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-g-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-11').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-12').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-13').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-14').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-15').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-16').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-17').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-18').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-19').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-20').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-21').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-22').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-23').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-24').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-25').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-26').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-27').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-28').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-29').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-30').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-31').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-32').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-33').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-34').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-35').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-36').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-37').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-38').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-h-39').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-1').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-2').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-3').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-4').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-5').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-6').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-7').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-8').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-9').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-10').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-11').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-12').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-13').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-14').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-15').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-16').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-17').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-18').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-19').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-20').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-21').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-22').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-23').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-24').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-25').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-26').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-27').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-28').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-29').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-30').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-31').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-32').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-33').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-34').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			$('#preMonitor-i-35').change(function(){
				if($(this).prop('checked')){
					preMonitorAdd($(this).attr('id'));
				}
				else{
					preMonitorSub($(this).attr('id'));
				}
			});
			
			function preMonitorAdd(checkPropertyIdTest){
				localStorage.setItem(checkPropertyIdTest,1);
				var localHidden = '#hidden'+checkPropertyIdTest;
				$(localHidden).val(localStorage.getItem(checkPropertyIdTest));
				preMonitorCounter=preMonitorCounter+1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Ready");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					intPreMonitorCounter = parseInt(preMonitorCounter);
					localStorage.setItem('localPreMonitorCounter', intPreMonitorCounter);
					intPreMonitorPercentage = parseInt(preMonitorPercentage);
					localStorage.setItem('localPreMonitorPercentage', intPreMonitorPercentage);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
			}
			
			function preMonitorSub(checkPropertyIdTest){
				localStorage.setItem(checkPropertyIdTest,0);
				var localHidden = '#hidden'+checkPropertyIdTest;
				$(localHidden).val(localStorage.getItem(checkPropertyIdTest));
				preMonitorCounter=preMonitorCounter-1;
					preMonitorPercentage=Math.round(preMonitorCounter/preMonitorTotal*100);
					$('#txtPreMonitorPercentage').text(preMonitorPercentage);
						$('#hiddenPreMonitorPercentage').val(preMonitorPercentage);
							$('#headerPercentage').text(preMonitorPercentage+"%"+" "+"Ready");
					$('#txtPreMonitorCounter').text(preMonitorCounter);
						$('#hiddenPreMonitorCounter').val(preMonitorCounter);
					$('#preMonitorMeter').val(preMonitorCounter);
					intPreMonitorCounter = parseInt(preMonitorCounter);
					localStorage.setItem('localPreMonitorCounter', intPreMonitorCounter);
					intPreMonitorPercentage = parseInt(preMonitorPercentage);
					localStorage.setItem('localPreMonitorPercentage', intPreMonitorPercentage);
					console.log(preMonitorCounter);
					console.log(preMonitorPercentage);
					console.log($('#hiddenPreMonitorCounter').val());
					console.log($('#hiddenPreMonitorPercentage').val());
					
			}
			

			$('#btnLogout').click(function(){
				$.mobile.loading("show");
				localStorage.setItem('datausername','');
				localStorage.setItem('datapassword','');
				localStorage.setItem('dataregion', '');
				localStorage.setItem('dataprovince', '');
				localStorage.setItem('datacity', '');
				$("#popuptextLogout").html("<strong>Thank you for using LISTO.</strong>");	
					$( "#popupAfterLogout" ).popup();
					$( "#popupAfterLogout" ).popup( "open", { 
					positionTo: "window",
					transition: "slidedown" });
					$.mobile.loading("hide");
				location.href="loginpage.html";
				
			});
			
			$('#btnSubmitPreMonitor').click(function(){
				var frmHiddenPreMonitor = $("#frmPreMonitorHidden");
				var preMonitorTyphoon = "Dodong";
					$('#hiddenPreMonitorTyphoon').val(preMonitorTyphoon);
				var preMonitorRegion = localStorage.getItem('dataregion');
					$('#hiddenPreMonitorRegion').val(preMonitorRegion);
				var preMonitorProvince = localStorage.getItem('dataprovince');
					$('#hiddenPreMonitorProvince').val(preMonitorProvince);
				var preMonitorCity = localStorage.getItem('datacity');
					$('#hiddenPreMonitorCity').val(preMonitorCity);
				finalPreMonitorPercentage=$('#txtPreMonitorPercentage').text();
					$('#hiddenPreMonitorPercentage').val(finalPreMonitorPercentage);
				finalPreMonitorCounter=$('#txtPreMonitorCounter').text();
					$('#hiddenPreMonitorCounter').val(finalPreMonitorCounter);
				console.log(preMonitorTyphoon);
				console.log(preMonitorRegion);
				console.log(preMonitorProvince);
				console.log(preMonitorCity);
				console.log(finalPreMonitorPercentage);
				console.log(finalPreMonitorCounter);
				$.mobile.loading("show");
				$.ajax({
					url: 'http://iligtas.ph/listo/mobile/add_premonitor.php',						
					type: 'POST',
					
					data: frmHiddenPreMonitor.serialize(),
					success: function (data) {
						$.mobile.loading("hide");
						$("#popuptextDataSubmit").html("<strong>"+data+"<strong>");	
						$( "#popupAfterDataSubmit" ).popup();
						$( "#popupAfterDataSubmit" ).popup( "open", { 
						positionTo: "window",
						transition: "slidedown" });
						$.mobile.loading("hide");
					},
					error: function(data){
						$.mobile.loading("hide");
						alert(data);
					}
				});
			});
});
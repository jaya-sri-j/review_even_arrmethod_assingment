var array=[5,10,15,20,25,30];
function feven(x)
{
	var even=[];
	var odd=[];
	for (i=0;i<x.length;i++)
	{
		if (x[i]%2==0)
		{
			even.push(x[i]);
		}
		else
		{
			odd.push(x[i]);
		}
	}
	document.write("<h1>EVEN NUMBERS :</h1>",even);
	var sum=0;
	for(i=0;i<even.length;i++)
	{
		sum=sum+even[i];
	}
	document.write("<h4>GIVEN SUM OF EVEN ARRAYS:</h4> ",sum);
	}
feven(array);
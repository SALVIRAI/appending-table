function addTable1(val1,val2)
{
	var newRow = table1.insertRow(table.length),
	cell1 = newRow.insertCell(0),
	cell2 = newRow.insertCell(1),
	value1 = val1,
	value2 = val2;

	cell1.innerHTML = value1;
	cell2.innerHTML = value2;
	clickTable2();
}

function clickTable1()
{
	for(var i = 1; i < table1.rows.length; i++)
	{
		table.rows[i].onclick = function()
		{
			rIndex = this.rowIndex;
			data1 = this.cells[0].innerHTML;
			data2 = this.cells[1].innerHTML;
			addTable2(data1,data2);
			removeSelectedRow();
		};
	}
}

function clickTable2()
{
	for(var i = 1; i < table2.rows.length; i++)
	{
		table2.rows[i].onclick = function()
		{
			rIndex2 = this.rowIndex;
			data3 = this.cells[0].innerHTML;
			data4 = this.cells[1].innerHTML;
			addTable1(data3, data4);
			removeSelectedRow2();
		};
	}
}

function addTable2(val1, val2)
{
	var newRow = table2.insertRow(table.length),
	cell1 = newRow.insertCell(0),
	cell2 = newRow.insertCell(1),
	value1 = val1,
	value2 = val2;

	cell1.innerHTML = value1;
	cell2.innerHTML = value2;
	clickTable1();
}

function removeSelectedRow2()
{
	table2.deleteRow(rIndex2);
}
function removeSelectedRow()
{
	table.deleteRow(rIndex);
}

var rIndex, table = document.getElementById("table1");
var rIndex2, table2 = document.getElementById("table2");
var data1, data2, data3, data4;

clickTable1();
clickTable2();
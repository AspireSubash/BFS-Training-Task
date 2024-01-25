define({
	d: 1,
	data: ["C", "C++", "Java", "Python"],
	init() {
		this.view.btnCon.onClick = this.display.bind(this);
	},
	display: function () {
		if (this.d !== 0) {
			this.view.ImgDrop.setVisibility(true);
			this.view.flxListItems.setVisibility(true);
			this.d = 0;
		} else {
			this.view.ImgDrop.setVisibility(false);
			this.view.flxListItems.setVisibility(false);
			this.d = 1;
		}
	},
	preshow: function () {
		try {
			var dataMap = {
				flxMain: "flxMain",
				flxListBoxMain: "flxListBoxMain",
				flxListItems: "flxListItems",
				lblData: "lblData",
			};
			this.view.Seg.widgetDataMap = dataMap;
			let rowData = [
				{
					lblData: {
						text: "C",
					},
				},
				{
					lblData: {
						text: "C++",
					},
				},
				{
					lblData: {
						text: "Java",
					},
				},
				{
					lblData: {
						text: "Python",
					},
				},
			];
			this.view.Seg.setData(rowData);
			this.view.Seg.onRowClick = this.changeText.bind(this);
		} catch (e) {
			console.log(e);
		}
	},
	changeText: function (row, rowData, rowNumber) {
		// alert(rowNumber);
		this.view.btnCon.text = this.data[rowNumber];
	},
});

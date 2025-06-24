/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=6;			// Number of first level items
	var LowBgColor='white';			// Background color when mouse is not over
	var LowSubBgColor='white';			// Background color when mouse is not over on subs
	var HighBgColor='black';			// Background color when mouse is over
	var HighSubBgColor='black';			// Background color when mouse is over on subs
	var FontLowColor='black';			// Font color when mouse is not over
	var FontSubLowColor='black';			// Font color subs when mouse is not over
	var FontHighColor='white';	 		// Font color when mouse is over
	var FontSubHighColor='white';			// Font color subs when mouse is over
	var BorderColor='black';			// Border color
	var BorderSubColor='black';			// Border color for subs
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=9;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=.2;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=220;				// Menu offset x coordinate
	var StartLeft=40;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=2;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['/menu/arrows/tri.gif',5,10,'/menu/arrows/tridown.gif',10,5,'/menu/arrows/trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"


Menu1=new Array("Informational","","",2,20,138);
	Menu1_1=new Array("Executive Board Meetings","","",1,20,220);
		Menu1_1_1=new Array("Scheduled meetings of the Board","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/calendar/2023_hoa_calendar.pdf', '_blank')","",0,20,220);
		
		Menu1_1_2=new Array("Election of the Board / Community Picnic","http://millerridgehoa.org/miller_ridge_hoa/info/election_picnic.htm","",0);
		Menu1_1_3=new Array("Budget Ratification","http://millerridgehoa.org/miller_ridge_hoa/info/ratification.htm","",0);

	Menu1_2=new Array("Trash & Recycling Calendar","","",2,20,150);	
		Menu1_2_1=new Array("HOA Trash & Recycling Calendar","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/calendar/2023_hoa_trash_recycling.pdf', '_blank')","",0,20,200);
		
		Menu1_2_2=new Array("Guidelines about Trash","http://millerridgehoa.org/miller_ridge_hoa/info/trash_service.htm","",0);	
	
	Menu1_3=new Array("Members of the Executive Board","http://millerridgehoa.org/miller_ridge_hoa/info/board_members.htm","",0,20,150);	
	
	Menu1_4=new Array("Our Community","","",3,20,150);
		Menu1_4_1=new Array("Who's Who","","",2,20,150);
		Menu1_4_2=new Array("By Address","http://millerridgehoa.org/miller_ridge_hoa/info/address.htm","",0,20,150);
		Menu1_4_3=new Array("Owner / Family Name","http://millerridgehoa.org/miller_ridge_hoa/info/name.htm","",0,20,150);




Menu2=new Array("Newsletters","","",16);
	Menu2_1=new Array("2009 Newsletters","","",6,20,125);
		Menu2_1_1=new Array("January 2009","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2009/newsletter_jan_2009.pdf', '_blank')","",0,20,150);
		Menu2_1_2=new Array("April 2009","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2009/newsletter_apr_2009.pdf', '_blank')","",0,20,150);
		Menu2_1_3=new Array("May 2009","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2009/newsletter_may_2009.pdf', '_blank')","",0,20,150);
		Menu2_1_4=new Array("July 2009","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2009/newsletter_jul_2009.pdf', '_blank')","",0,20,150);
		Menu2_1_5=new Array("October 2009","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2009/newsletter_oct_2009.pdf', '_blank')","",0,20,150);
		Menu2_1_6=new Array("November 2009","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2009/newsletter_nov_2009.pdf', '_blank')","",0,20,150);
	Menu2_2=new Array("2010 Newsletters","","",4,20,125);
		Menu2_2_1=new Array("January 2010","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2010/newsletter_jan_2010.pdf', '_blank')","",0,20,150);
		Menu2_2_2=new Array("May 2010","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2010/newsletter_may_2010.pdf', '_blank')","",0,20,150);
		Menu2_2_3=new Array("October 2010 (postcard)","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2010/newsletter_(card)_oct_2010.pdf', '_blank')","",0,20,150);
		Menu2_2_4=new Array("November 2010","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2010/newsletter_nov_2010.pdf', '_blank')","",0,20,150);
	Menu2_3=new Array("2011 Newsletters","","",5,20,125);
		Menu2_3_1=new Array("January 2011 (postcard)","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2011/newsletter_(card)_jan_2011.pdf', '_blank')","",0,20,150);
		Menu2_3_2=new Array("April 2011 (postcard)","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2011/newsletter_(card)_apr_2011.pdf', '_blank')","",0,20,150);
		Menu2_3_3=new Array("May 2011","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2011/newsletter_may_2011.pdf', '_blank')","",0,20,150);	
		Menu2_3_4=new Array("August 2011","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2011/newsletter_aug_2011.pdf', '_blank')","",0,20,150);
		Menu2_3_5=new Array("November 2011","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2011/newsletter_nov_2011.pdf', '_blank')","",0,20,150);
	Menu2_4=new Array("2012 Newsletters","","",5,20,125);
		Menu2_4_1=new Array("January 2012","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2012/newsletter_jan_2012.pdf', '_blank')","",0,20,165);
		Menu2_4_2=new Array("May 2012","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2012/newsletter_may_2012.pdf', '_blank')","",0,20,165);
		Menu2_4_3=new Array("August 2012","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2012/newsletter_aug_2012.pdf', '_blank')","",0,20,165);
		Menu2_4_4=new Array("August 2012 - supplemental","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2012/newsletter_aug_2012_sup.pdf', '_blank')","",0,20,165);
		Menu2_4_5=new Array("December 2012","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2012/newsletter_dec_2012.pdf', '_blank')","",0,20,165);
	Menu2_5=new Array("2013 Newsletters","","",6,20,125);
		Menu2_5_1=new Array("January 2013","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2013/newsletter_jan_2013.pdf', '_blank')","",0,20,165);
		Menu2_5_2=new Array("March 2013","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2013/newsletter_mar_2013.pdf', '_blank')","",0,20,165);
		Menu2_5_3=new Array("May 2013","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2013/newsletter_may_2013.pdf', '_blank')","",0,20,165);
		Menu2_5_4=new Array("July 2013","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2013/newsletter_jul_2013.pdf', '_blank')","",0,20,165);
		Menu2_5_5=new Array("October 2013","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2013/newsletter_oct_2013.pdf', '_blank')","",0,20,165);
		Menu2_5_6=new Array("December 2013","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2013/newsletter_dec_2013.pdf', '_blank')","",0,20,165);
	Menu2_6=new Array("2014 Newsletters","","",7,20,125);
		Menu2_6_1=new Array("January 2014","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2014/newsletter_jan_2014.pdf', '_blank')","",0,20,165);
		Menu2_6_2=new Array("April 2014","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2014/newsletter_apr_2014.pdf', '_blank')","",0,20,165);
		Menu2_6_3=new Array("May 2014","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2014/newsletter_may_2014.pdf', '_blank')","",0,20,165);
		Menu2_6_4=new Array("June 2014","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2014/newsletter_jun_2014.pdf', '_blank')","",0,20,165);
		Menu2_6_5=new Array("October 2014","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2014/newsletter_oct_2014.pdf', '_blank')","",0,20,165);
		Menu2_6_6=new Array("December 2014","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2014/newsletter_dec_2014.pdf', '_blank')","",0,20,165);
		Menu2_6_7=new Array("December 2014 (SE)","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2014/newsletter_dec_2014(b).pdf', '_blank')","",0,20,165);
	Menu2_7=new Array("2015 Newsletters","","",7,20,125);
		Menu2_7_1=new Array("April 2015","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2015/newsletter_apr_2015.pdf', '_blank')","",0,20,165);
		Menu2_7_2=new Array("Dumpster 2015","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2015/newsletter_dumpster_2015.pdf', '_blank')","",0,20,165);
		Menu2_7_3=new Array("June 2015","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2015/newsletter_jun_2015.pdf', '_blank')","",0,20,165);
		Menu2_7_4=new Array("August 2015","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2015/newsletter_aug_2015.pdf', '_blank')","",0,20,165);
		Menu2_7_5=new Array("September 2015","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2015/newsletter_sep_2015.pdf', '_blank')","",0,20,165);
		Menu2_7_6=new Array("November 2015","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2015/newsletter_nov_2015.pdf', '_blank')","",0,20,165);
		Menu2_7_7=new Array("December 2015","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2015/newsletter_dec_2015.pdf', '_blank')","",0,20,165);
	Menu2_8=new Array("2016 Newsletters","","",4,20,125);
		Menu2_8_1=new Array("May - Dumpster Info 2016","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2016/newsletter_may-dumpster_2016.pdf', '_blank')","",0,20,165);
		Menu2_8_2=new Array("August 2016","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2016/newsletter_august_2016.pdf', '_blank')","",0,20,165);
		Menu2_8_3=new Array("November 2016","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2016/newsletter_november_2016.pdf', '_blank')","",0,20,165);
		Menu2_8_4=new Array("December 2016","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2016/newsletter_december_2016.pdf', '_blank')","",0,20,165);
	Menu2_9=new Array("2017 Newsletters","","",4,20,125);
		Menu2_9_1=new Array("May - Dumpster Info 2017","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2017/newsletter_may-dumpster_2017.pdf', '_blank')","",0,20,165);
		Menu2_9_2=new Array("July 2017","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2017/newsletter_july_2017.pdf', '_blank')","",0,20,165);
		Menu2_9_3=new Array("August 2017","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2017/newsletter_august_2017.pdf', '_blank')","",0,20,165);
		Menu2_9_4=new Array("November 2017","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2017/newsletter_november_2017.pdf', '_blank')","",0,20,165);
	Menu2_10=new Array("2018 Newsletters","","",3,20,125);
		Menu2_10_1=new Array("April 2018","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2018/newsletter_april_2018.pdf', '_blank')","",0,20,165);	
		Menu2_10_2=new Array("May - Dumpster Info 2018","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2018/newsletter_may-dumpster_2018.pdf', '_blank')","",0,20,165);
		Menu2_10_3=new Array("July 2018","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2018/newsletter_july_2018.pdf', '_blank')","",0,20,165);	
	Menu2_11=new Array("2019 Newsletters","","",2,20,125);
		Menu2_11_1=new Array("May - Dumpster Info 2019","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2019/newsletter_may-dumpster_2019.pdf', '_blank')","",0,20,165);
		Menu2_11_2=new Array("July 2019","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2019/newsletter_july_2019.pdf', '_blank')","",0,20,165);
	Menu2_12=new Array("2020 Newsletters","","",4,20,125);
		Menu2_12_1=new Array("May - Dumpster Info 2020","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2020/newsletter_may-dumpster_2020.pdf', '_blank')","",0,20,165);
		Menu2_12_2=new Array("July 2020","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2020/newsletter_july_2020.pdf', '_blank')","",0,20,165);
		Menu2_12_3=new Array("October 2020","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2020/newsletter_october_2020.pdf', '_blank')","",0,20,165);
		Menu2_12_4=new Array("November 2020","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2020/newsletter_november_2020.pdf', '_blank')","",0,20,165);
	Menu2_13=new Array("2021 Newsletters","","",4,20,125);
		Menu2_13_1=new Array("Spring Newsletter 2021","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2021/spring_newsletter_2021.pdf', '_blank')","",0,20,165);
		Menu2_13_2=new Array("July 2021","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2021/newsletter_july_2021.pdf', '_blank')","",0,20,165);
		Menu2_13_3=new Array("October 2021","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2021/newsletter_october_2021.pdf', '_blank')","",0,20,165);
		Menu2_13_4=new Array("December 2021","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2021/newsletter_december_2021.pdf', '_blank')","",0,20,165);
	Menu2_14=new Array("2022 Newsletters","","",3,20,125);
		Menu2_14_1=new Array("Spring Newsletter 2022","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2022/spring_newsletter_2022.pdf', '_blank')","",0,20,165);
		Menu2_14_2=new Array("July 2022","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2022/newsletter_july_2022.pdf', '_blank')","",0,20,165);
		Menu2_14_3=new Array("October - December 2022","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2022/newsletter_oct-dec_2022.pdf', '_blank')","",0,20,165);
	Menu2_15=new Array("2023 Newsletters","","",4,20,125);
		Menu2_15_1=new Array("January - March 2023","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2023/newsletter_jan_mar_2023.pdf', '_blank')","",0,20,165);	
		Menu2_15_2=new Array("April - May 2023","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2023/newsletter_apr_may_2023.pdf', '_blank')","",0,20,165);
		Menu2_15_3=new Array("July 2023","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2023/newsletter_jul_2023.pdf', '_blank')","",0,20,165);
		Menu2_15_4=new Array("October 2023","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2023/newsletter_oct_2023.pdf', '_blank')","",0,20,165);	
	Menu2_16=new Array("2024 Newsletters","","",2,20,125);
		Menu2_16_1=new Array("January 2024","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2024/newsletter_jan_2024.pdf', '_blank')","",0,20,165);
		Menu2_16_2=new Array("April-May 2024","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/newsletters/2024/newsletter_may_2024.pdf', '_blank')","",0,20,165);			
		
Menu3=new Array("Meeting Minutes","","",7);
	Menu3_1=new Array("Intro to Board Minutes","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/intro_to_minutes.pdf', '_blank')","",0,20,150);
	Menu3_2=new Array("2019 Minutes","","",1,20,125);
		Menu3_2_1=new Array("Ratification","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2019/ratification.pdf', '_blank')","",0,20,150);
	Menu3_3=new Array("2020 Minutes","","",5,20,125);
		Menu3_3_1=new Array("1st Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2020/1q.pdf', '_blank')","",0,20,150);
		Menu3_3_2=new Array("2nd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2020/2q.pdf', '_blank')","",0,20,150);
		Menu3_3_3=new Array("3rd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2020/3q.pdf', '_blank')","",0,20,150);
		Menu3_3_4=new Array("4th Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2020/4q.pdf', '_blank')","",0,20,150);
		Menu3_3_5=new Array("Ratification","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2020/ratification.pdf', '_blank')","",0,20,150);
	Menu3_4=new Array("2021 Minutes","","",5,20,125);
		Menu3_4_1=new Array("1st Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2021/1q.pdf', '_blank')","",0,20,150);
		Menu3_4_2=new Array("2nd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2021/2q.pdf', '_blank')","",0,20,150);
		Menu3_4_3=new Array("3rd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2021/3q.pdf', '_blank')","",0,20,150);
		Menu3_4_4=new Array("4th Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2021/4q.pdf', '_blank')","",0,20,150);
		Menu3_4_5=new Array("Ratification","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2021/ratification.pdf', '_blank')","",0,20,150);
	Menu3_5=new Array("2022 Minutes","","",5,20,125);
		Menu3_5_1=new Array("1st Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2022/1q.pdf', '_blank')","",0,20,150);
		Menu3_5_2=new Array("2nd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2022/2q.pdf', '_blank')","",0,20,150);
		Menu3_5_3=new Array("3rd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2022/3q.pdf', '_blank')","",0,20,150);
		Menu3_5_4=new Array("4th Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2022/4q.pdf', '_blank')","",0,20,150);
		Menu3_5_5=new Array("Ratification","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2022/ratification.pdf', '_blank')","",0,20,150);
	Menu3_6=new Array("2023 Minutes","","",4,20,125);
		Menu3_6_1=new Array("1st Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2023/1q.pdf', '_blank')","",0,20,150);
		Menu3_6_2=new Array("2nd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2023/2q.pdf', '_blank')","",0,20,150);
		Menu3_6_3=new Array("3rd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2023/3q.pdf', '_blank')","",0,20,150);
		Menu3_6_4=new Array("4th Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2023/4q.pdf', '_blank')","",0,20,150);
		Menu3_6_5=new Array("Ratification","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2023/ratification.pdf', '_blank')","",0,20,150);
	Menu3_7=new Array("2024 Minutes","","",1,20,125);
		Menu3_7_1=new Array("1st Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2024/1q.pdf', '_blank')","",0,20,150);
		Menu3_7_2=new Array("2nd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2024/2q.pdf', '_blank')","",0,20,150);
		Menu3_7_3=new Array("3rd Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2024/3q.pdf', '_blank')","",0,20,150);
		Menu3_7_4=new Array("4th Quarter","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2024/4q.pdf', '_blank')","",0,20,150);
		Menu3_7_5=new Array("Ratification","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/minutes/2024/ratification.pdf', '_blank')","",0,20,150);

Menu4=new Array("Forms","","",2);	
	Menu4_1=new Array("Architectural / Complaint","","",2,20,170);	
		Menu4_1_1=new Array("Architectural and Review Form","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/forms/architectural/arch_form.pdf', '_blank')","",0,20,185);
		Menu4_1_2=new Array("Complaint Form","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/forms/complaint/complaint_form.pdf', '_blank')","",0,20,185);
	Menu4_2=new Array("Nomination / Voting","","",2,20,150);	
		Menu4_2_1=new Array("Nomination Form","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/forms/nomination/nomination_form.pdf', '_blank')","",0,20,150);
		Menu4_2_2=new Array("Voting Ballot","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/forms//vote/voting_ballot.pdf', '_blank')","",0,20,150);


Menu5=new Array("Legal Documents","","",5);
	Menu5_1=new Array("Articles of Incorportation","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/articles_of_inc.pdf', '_blank')","",0,20,160);
	Menu5_2=new Array("Bylaws","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/bylaws.pdf', '_blank')","",0,20,160);
	Menu5_3=new Array("Covenants","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/covenants.pdf', '_blank')","",0,20,160);
	Menu5_4=new Array("HOA Policies...","","",9,20,80);	
		Menu5_4_1=new Array("Enforcement","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/1-policy_enforcement-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_2=new Array("Conflict of Interest","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/2-policy_conflict_of_interest-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_3=new Array("ADR","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/3-policy_adr-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_4=new Array("Reserve Plan","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/4-policy_reserve_plan-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_5=new Array("Conduct of Meetings","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/5-policy_conduct_of_meetings-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_6=new Array("Adoption and Amendment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/6-policy_adoption_and_amendment-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_7=new Array("Reserve Fund Investment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/7-policy_reserve_fund_investment-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_8=new Array("Inspection of Records","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/8-policy_inspection_of_records-20161104.pdf', '_blank')","",0,20,185);
		Menu5_4_9=new Array("Collections","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/9-policy_collections-20161104.pdf', '_blank')","",0,20,185);
	Menu5_5=new Array("Rules and Regulations","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/rules_regs.pdf', '_blank')","",0,20,160);


Menu6=new Array("Contact Us","","",2);
	Menu6_1=new Array("Email the Board","mailto:president@millerridgehoa.org; monk4963@msn.com; rick.skeen@comcast.net; chaslittle@comcast.net; mindylegault@hotmail.com;","",0,20,140);
	Menu6_2=new Array("Email the Webmaster","mailto:webmaster@millerridgehoa.org","",0,20,140);

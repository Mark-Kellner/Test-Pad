;/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=4;			// Number of first level items
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


Menu1=new Array("Aquariums & Zoos","","",2,20,138);
	Menu1_1=new Array("Aquariums","","",2,20,125);
		Menu1_1_1=new Array("Chicago's John G. Shedd Aquarium","javascript:window.open('https://www.sheddaquarium.org/', '_blank')","",0,20,220);
		Menu1_1_2=new Array("Downtown Aquarium - Denver","javascript:window.open('https://www.aquariumrestaurants.com/downtownaquariumdenver/', '_blank')","",0,20,220);

	Menu1_2=new Array("Zoos","","",6,20,125);
		Menu1_2_1=new Array("Bronx Zoo","javascript:window.open('https://bronxzoo.com/', '_blank')","",0,20,165);
		Menu1_2_2=new Array("Cheyenne Mountain Zoo","javascript:window.open('https://cmzoo.org/', '_blank')","",0,20,165);
		Menu1_2_3=new Array("Chicago - Lincoln Park Zoo","javascript:window.open('https://www.lpzoo.org/', '_blank')","",0,20,165);
		Menu1_2_4=new Array("Chicago - Brookfield Zoo","javascript:window.open('https://www.brookfieldzoo.org/', '_blank')","",0,20,165);
		Menu1_2_5=new Array("Denver Zoo","javascript:window.open('https://denverzoo.org', '_blank')","",0,20,165);
		Menu1_2_6=new Array("Omaha - Henry Doorly Zoo","javascript:window.open('https://www.omahazoo.com', '_blank')","",0,20,165);



Menu2=new Array("Government","","",3,20,25);
	Menu2_1=new Array("Federal Government Agencies","","",3,20,200);
		Menu2_1_1=new Array("Federal Communications Commission (FCC)","javascript:window.open('https://www.fcc.gov/', '_blank')","",0,20,270);
		Menu2_1_2=new Array("Social Security Administration (SSA)","javascript:window.open('https://www.ssa.gov/', '_blank')","",0,20,270);		
		Menu2_1_3=new Array("US Passport","tjavascript:window.open('https://travel.state.gov/content/travel/en/passports.html', '_blank')","",0,20,270);

	Menu2_2=new Array("State Government Websites","","",2,20,180);	
		Menu2_2_1=new Array("Colorado State Government","","",1,20,180);
			Menu2_2_1_1=new Array("State of Colorado","javascript:window.open('https://co.colorado.gov/', '_blank')","",0,20,215);
		Menu2_2_2=new Array("Oregon State Government","","",1,20,180);
			Menu2_2_2_1=new Array("1st Oregon State Government Link","javascript:window.open('https://www.oregon.gov', '_blank')","",0,20,215);

	Menu2_3=new Array("County Government by State","","",2,20,180);	
		Menu2_3_1=new Array("Colorado County Government","","",13,20,180);
			Menu2_3_1_1=new Array("Adams County Government","javascript:window.open('https://adcogov.org', '_blank')","",0,20,200);
			Menu2_3_1_2=new Array("Arapahoe County Government","javascript:window.open('https://www.arapahoeco.gov', '_blank')","",0,20,200);
			Menu2_3_1_3=new Array("Boulder County Government","javascript:window.open('https://bouldercounty.gov', '_blank')","",0,20,200);
			Menu2_3_1_4=new Array("Broomfield County Government","javascript:window.open('https://broomfield.org', '_blank')","",0,20,200);
			Menu2_3_1_5=new Array("Clear Creek County Government","javascript:window.open('https://www.clearcreekcounty.us', '_blank')","",0,20,200);
			Menu2_3_1_6=new Array("Denver County Government","javascript:window.open('https://denvergov.org', '_blank')","",0,20,200);
			Menu2_3_1_7=new Array("Douglas County Government","javascript:window.open('https://www.douglas.co.us', '_blank')","",0,20,200);
			Menu2_3_1_8=new Array("El Paso County Government","javascript:window.open('https://www.elpasoco.com', '_blank')","",0,20,200);
			Menu2_3_1_9=new Array("Gilpin County Government","javascript:window.open('https://gilpincounty.colorado.gov', '_blank')","",0,20,200);
			Menu2_3_1_10=new Array("Jefferson County Government","javascript:window.open('https://www.jeffco.us', '_blank')","",0,20,200);
			Menu2_3_1_11=new Array("Park County Government","javascript:window.open('https://www.parkcountyco.gov', '_blank')","",0,20,200);
			Menu2_3_1_12=new Array("Larimer County Government","javascript:window.open('https://www.larimer.gov', '_blank')","",0,20,200);
			Menu2_3_1_13=new Array("Weld County Government","javascript:window.open('https://www.weld.gov', '_blank')","",0,20,200);

		Menu2_3_2=new Array("Oregon County Government","","",7,20,180);	
			Menu2_3_2_1=new Array("Coos County Government","javascript:window.open('https://www.co.coos.or.us', '_blank')","",0,20,180);
			Menu2_3_2_2=new Array("Curry County Government","javascript:window.open('https://www.co.curry.or.us', '_blank')","",0,20,180);
			Menu2_3_2_3=new Array("Douglas County Government","javascript:window.open('https://douglascountyor.gov', '_blank')","",0,20,180);
			Menu2_3_2_4=new Array("Jackson County Government","javascript:window.open('https://jacksoncountyor.gov', '_blank')","",0,20,180);
			Menu2_3_2_5=new Array("Josephine County Government","javascript:window.open('https://www.josephinecounty.gov', '_blank')","",0,20,180);
			Menu2_3_2_6=new Array("Klamath County Government","javascript:window.open('https://www.klamathcounty.org', '_blank')","",0,20,180);
			Menu2_3_2_7=new Array("Marion County Government","javascript:window.open('https://www.co.marion.or.us', '_blank')","",0,20,180);
			
				
Menu3=new Array("Mail Servers","","",3);

	Menu3_1=new Array("ColoradoElkhound.com - Email","javascript:window.open('https://coloradoelkhound.com:2096/', '_blank')","",0,20,250);
	Menu3_2=new Array("Gmail (Google Email","javascript:window.open('http://gmail.com', '_blank')","",0,20,250);
	Menu3_3=new Array("Yahoo Mail","javascript:window.open('https://mail.yahoo.com/', '_blank')","",0,20,250);
	
		
Menu4=new Array("Museums","","",8);	
	Menu4_1=new Array("Chicago - (The) Art Institude of Chicago","javascript:window.open('https://www.artic.edu', '_blank')","",0,20,285);
	Menu4_2=new Array("Chicago - Field Museum","javascript:window.open('https://www.fieldmuseum.org', '_blank')","",0,20,185);
	Menu4_3=new Array("Chicago - Griffin Museum of Science & Industry","javascript:window.open('https://www.msichicago.org', '_blank')","",0,20,185);
	Menu4_4=new Array("Denver - (The) Denver Art Museum","javascript:window.open('https://www.denverartmuseum.org/en', '_blank')","",0,20,185);
	Menu4_5=new Array("Denver - Denver Fire Fighter's Museum","javascript:window.open('https://denverfirefightersmuseum.org', '_blank')","",0,20,185);
	Menu4_6=new Array("Denver - Denver Museum of Nature & Science","javascript:window.open('https://www.dmns.org/', '_blank')","",0,20,150);
	Menu4_6=new Array("Denver - Forney Museum of Transportation","javascript:window.open('https://www.forneymuseum.org', '_blank')","",0,20,150);
	Menu4_7=new Array("Denver - Children's Museum","javascript:window.open('https://www.mychildsmuseum.org', '_blank')","",0,20,150);
	Menu4_8=new Array("Golden - Colorado Railroad Museum","javascript:window.open('https://coloradorailroadmuseum.org', '_blank')","",0,20,150);




Menu5=new Array("News","","",5);
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


Menu6=new Array("Sea Ocean","","",2);
	Menu6_1=new Array("Email the Board","mailto:president@millerridgehoa.org; monk4963@msn.com; rick.skeen@comcast.net; chaslittle@comcast.net; mindylegault@hotmail.com;","",0,20,140);
	Menu6_2=new Array("Email the Webmaster","mailto:webmaster@millerridgehoa.org","",0,20,140);


Menu7=new Array("Search Engines","","",4);

	Menu7_1=new Array("Articles of Incorportation","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/articles_of_inc.pdf', '_blank')","",0,20,160);
	Menu7_2=new Array("Bylaws","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/bylaws.pdf', '_blank')","",0,20,160);
	Menu7_3=new Array("Covenants","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/covenants.pdf', '_blank')","",0,20,160);
	Menu7_4=new Array("HOA Policies...","","",9,20,80);	
		Menu7_4_1=new Array("Enforcement","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/1-policy_enforcement-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_2=new Array("Conflict of Interest","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/2-policy_conflict_of_interest-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_3=new Array("ADR","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/3-policy_adr-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_4=new Array("Reserve Plan","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/4-policy_reserve_plan-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_5=new Array("Conduct of Meetings","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/5-policy_conduct_of_meetings-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_6=new Array("Adoption and Amendment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/6-policy_adoption_and_amendment-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_7=new Array("Reserve Fund Investment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/7-policy_reserve_fund_investment-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_8=new Array("Inspection of Records","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/8-policy_inspection_of_records-20161104.pdf', '_blank')","",0,20,185);
		Menu7_4_9=new Array("Collections","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/9-policy_collections-20161104.pdf', '_blank')","",0,20,185);
	Menu5_5=new Array("Rules and Regulations","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/rules_regs.pdf', '_blank')","",0,20,160);


Menu8=new Array("Space & Flight","","",4);
	Menu8_1=new Array("Articles of Incorportation","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/articles_of_inc.pdf', '_blank')","",0,20,160);
	Menu8_2=new Array("Bylaws","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/bylaws.pdf', '_blank')","",0,20,160);
	Menu8_3=new Array("Covenants","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/covenants.pdf', '_blank')","",0,20,160);
	Menu8_4=new Array("HOA Policies...","","",9,20,80);	
		Menu8_4_1=new Array("Enforcement","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/1-policy_enforcement-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_2=new Array("Conflict of Interest","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/2-policy_conflict_of_interest-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_3=new Array("ADR","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/3-policy_adr-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_4=new Array("Reserve Plan","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/4-policy_reserve_plan-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_5=new Array("Conduct of Meetings","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/5-policy_conduct_of_meetings-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_6=new Array("Adoption and Amendment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/6-policy_adoption_and_amendment-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_7=new Array("Reserve Fund Investment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/7-policy_reserve_fund_investment-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_8=new Array("Inspection of Records","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/8-policy_inspection_of_records-20161104.pdf', '_blank')","",0,20,185);
		Menu8_4_9=new Array("Collections","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/9-policy_collections-20161104.pdf', '_blank')","",0,20,185);
	Menu8_5=new Array("Rules and Regulations","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/rules_regs.pdf', '_blank')","",0,20,160);

Menu9=new Array("Weather","","",4);
	Menu9_1=new Array("Articles of Incorportation","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/articles_of_inc.pdf', '_blank')","",0,20,160);
	Menu9_2=new Array("Bylaws","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/bylaws.pdf', '_blank')","",0,20,160);
	Menu9_3=new Array("Covenants","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/covenants.pdf', '_blank')","",0,20,160);
	Menu9_4=new Array("HOA Policies...","","",9,20,80);	
		Menu9_4_1=new Array("Enforcement","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/1-policy_enforcement-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_2=new Array("Conflict of Interest","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/2-policy_conflict_of_interest-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_3=new Array("ADR","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/3-policy_adr-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_4=new Array("Reserve Plan","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/4-policy_reserve_plan-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_5=new Array("Conduct of Meetings","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/5-policy_conduct_of_meetings-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_6=new Array("Adoption and Amendment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/6-policy_adoption_and_amendment-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_7=new Array("Reserve Fund Investment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/7-policy_reserve_fund_investment-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_8=new Array("Inspection of Records","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/8-policy_inspection_of_records-20161104.pdf', '_blank')","",0,20,185);
		Menu9_4_9=new Array("Collections","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/9-policy_collections-20161104.pdf', '_blank')","",0,20,185);
	Menu9_5=new Array("Rules and Regulations","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/rules_regs.pdf', '_blank')","",0,20,160);

Menu10=new Array("BLANK","","",4);
	Menu10_1=new Array("Aquariums","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/articles_of_inc.pdf', '_blank')","",0,20,160);
	Menu10_2=new Array("Bylaws","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/bylaws.pdf', '_blank')","",0,20,160);
	Menu10_3=new Array("Covenants","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/covenants.pdf', '_blank')","",0,20,160);
	Menu10_4=new Array("HOA Policies...","","",9,20,80);	
		Menu10_4_1=new Array("Enforcement","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/1-policy_enforcement-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_2=new Array("Conflict of Interest","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/2-policy_conflict_of_interest-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_3=new Array("ADR","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/3-policy_adr-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_4=new Array("Reserve Plan","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/4-policy_reserve_plan-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_5=new Array("Conduct of Meetings","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/5-policy_conduct_of_meetings-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_6=new Array("Adoption and Amendment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/6-policy_adoption_and_amendment-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_7=new Array("Reserve Fund Investment","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/7-policy_reserve_fund_investment-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_8=new Array("Inspection of Records","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/8-policy_inspection_of_records-20161104.pdf', '_blank')","",0,20,185);
		Menu10_4_9=new Array("Collections","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/policies/9-policy_collections-20161104.pdf', '_blank')","",0,20,185);
	Menu10_5=new Array("Rules and Regulations","javascript:window.open('http://millerridgehoa.org/miller_ridge_hoa/legal/rules_regs.pdf', '_blank')","",0,20,160);


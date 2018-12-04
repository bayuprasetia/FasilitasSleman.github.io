// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Gridded Reference Graphic",newGRGFromAreaButtonLabel:"Define a Grid from an Area",newGRGFromPointButtonLabel:"Define a Grid from a Point",newGRGFromAreaTitle:"Define a Grid from an Area",newGRGFromPointTitle:"Define a Grid from a Point",newGRGBySizeButtonLabel:"By Dimension",newGRGFromRefSystemButtonLabel:"By Reference System",newGRGByTimeLabel:"By Time and Speed",newGRGFromNonStandardButtonLabel:"Define Non-Standard Grid",newGRGAreaBySizeTitle:"GRG from an Area by Dimension",
newGRGAreaBySizeDefineAreaLabel:"GRG Area",addGRGAreaPolygonToolTip:"Draw GRG Area using polygon",addGRGAreaExtentToolTip:"Draw GRG Area using extent",rotation:"Grid Rotation",numberRowsColumnsLabel:"Define number of rows and columns",newGRGAreaByRefSystemTitle:"GRG from an Area by Reference System",gridSize:"Grid Size",UTMZoneandBand:"Grid Zone","100000m":"100000 meter","10000m":"10000 meter","1000m":"1000 meter","100m":"100 meter","10m":"10 meter",clipGrid:"Clip Grid to GRG Area",newGRGAreaFromNonStandardTitle:"New NRG",
newGRGPointBySizeTitle:"GRG from Point by Dimension",newGRGPointByRefSystemTitle:"GRG from Point by Reference System",newGRGPointByTimeTitle:"GRG from Point using Time and Speed",time:"Time",rate:"Speed",hours:"Hours",minutes:"Minutes",seconds:"Seconds",ftPerSec:"Feet / second",ftPerHour:"Feet / hour",kmPerSec:"Kilometers / second",kmPerHour:"Kilometers / hour",mPerSec:"Meters / second",mPerHour:"Meters / hour",miPerSec:"Miles / second",miPerHour:"Miles / hour",nMPerSec:"Nautical Miles / second",
nMPerHour:"Nautical Miles / hour",settingsTitle:"Settings",labelSettingsLabel:"Label Settings",labelSettingsButtonLabel:"Configure Label Settings",gridSettingsLabel:"Grid Settings",gridSettingsButtonLabel:"Configure Grid Settings",transparency:"Transparency",labelStyle:"Label Style",font:"Font",textSize:"Text Size",textColor:"Text Color",halo:"Halo",show:"Show",lockSettings:"Settings have been locked by the application owner",gridSettings:{cellShape:"Cell Shape",cellUnits:"Cell Units",cellOutline:"Cell Outline Settings",
cellFill:"Cell Fill Settings",gridReferenceSystem:"Reference System",gridDatum:"Datum: WGS84",labelStartPosition:"Label Origin",labelType:"Label Type",labelDirection:"Label Direction",gridOrigin:"Grid Origin","default":"Rectangle",hexagon:"Hexagon",miles:"Miles",kilometers:"Kilometers",feet:"Feet",meters:"Meters",yards:"Yards","nautical-miles":"Nautical Miles",lowerLeft:"Lower-Left",lowerRight:"Lower-Right",upperLeft:"Upper-Left",upperRight:"Upper-Right",center:"Center",alphaNumeric:"Alpha-Numeric",
alphaAlpha:"Alpha-Alpha",numeric:"Numeric",horizontal:"Horizontal",vertical:"Vertical",MGRS:"MGRS",USNG:"USNG",showLabels:"Show Labels"},publishTitle:"Publish GRG to Portal",publishGRGBtn:"Publish",GRGLayerName:"Published GRG Layer Name",invalidGRGLayerName:"Layer name must only contain alpha-numeric characters and underscores",missingGRGLayerName:"You must enter a name for the GRG",publishWorskpaceError:"ERROR: Error in opening workspace",publishingFailedLayerExists:"Publishing Failed: You already have a feature service named {0}. Please choose another name.",
checkService:"Check Service: {0}",createService:"Create Service: {0}",unableToCreate:"Unable to create: {0}",addToDefinition:"Add to definition: {0}",successfullyPublished:"Successfully published web layer{0}Manage the web layer",userRole:"Unable to create service because user does not have permissions",createGRGBtn:"Create GRG",clearGRGBtn:"Clear",labelFormat:"Label Format",helpIconTooltip:"Z: Grid Zone Designator (GZD)\nS: 100,000-meter Grid Square Identification (GSID)\nX: Easting (X Coordinate)\nY: Northing (Y Coordinate)\n\nExamples:\nZSXY is 15SWC8081751205\nZS X,Y is 15SWC 80817,51205",
addPointToolTip:"Add GRG Origin",cellWidth:"Cell Width (x)",cellHeight:"Cell Height (y)",invalidNumberMessage:"The value entered is not valid",invalidRangeMessage:"Value must be greater than 0",gridAngleInvalidRangeMessage:"Value must be between -89.9 and 89.9",formatIconTooltip:"Format Input",coordInputLabel:"GRG Origin (DD)",setCoordFormat:"Set Coordinate Format String",prefixNumbers:"Add '+/-' prefix to positive and negative numbers",cancelBtn:"Cancel",applyBtn:"Apply",comfirmInputNotation:"Confirm Input Notation",
notationsMatch:"notations match your input please confirm which you would like to use:",numberOfCellsHorizontal:"# Horizontal Cells",numberOfCellsVertical:"# Vertical Cells",gridAngle:"Grid Rotation",tooManyCellsErrorMessage:"You are attempting to create a grid comprising of more than 2000 cells. It is advisable to reduce the number of cells being created by changing the grid size or grid area.",missingParametersMessage:"\x3cp\x3eThe GRG creation form has missing or invalid parameters, Please ensure:\x3c/p\x3e\x3cul\x3e\x3cli\x3eA GRG area has been drawn.\x3c/li\x3e\x3cli\x3eThe cell width and height contain valid values.\x3c/li\x3e\x3c/ul\x3e",
missingOriginParametersMessage:"\x3cp\x3eThe GRG creation form has missing or invalid parameters, Please ensure:\x3c/p\x3e\x3cul\x3e\x3cli\x3eA GRG origin has been set.\x3c/li\x3e\x3cli\x3eThe time, speed and angle inputs contain valid values.\x3c/li\x3e\x3c/ul\x3e",invalidWidthHeightParametersMessage:"\x3cp\x3eThe GRG creation form has missing or invalid parameters. Please ensure the cell width and height inputs contain valid values.\x3c/p\x3e",invalidHorizontalVerticalParametersMessage:"\x3cp\x3eThe GRG creation form has missing or invalid parameters. Please ensure the number of cells horizontal and vertical inputs contain valid values.\x3c/p\x3e",
drawPointToolTip:"Click to add GRG origin point",missingLayerNameMessage:"You must enter a valid layer name before you can publish",parseCoordinatesError:"Unable to parse coordinates. Please check your input.",grgPolarRegionError:"The GRG extent is within a polar region. Cells that fall within the polar region will not be created.",grgPolarOriginError:"The GRG origin point cannot be within a polar region when creating a GRG by Reference System.",deleteBtn:"Delete",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",
DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Decimal Degrees - Latitude/Longitude",DDLongLatNotation:"Decimal Degrees  - Longitude/Latitude",DDMLatLongNotation:"Degrees Decimal Minutes - Latitude/Longitude",DDMLongLatNotation:"Degrees Decimal Minutes - Longitude/Latitude",DMSLatLongNotation:"Degrees Minutes Seconds - Latitude/Longitude",DMSLongLatNotation:"Degrees Minutes Seconds - Longitude/Latitude",GARSNotation:"GARS",
GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - Band Letter",UTMHemNotation:"UTM - Hemisphere (N/S)",_localized:{ar:1,bs:1,ca:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hi:1,hr:1,hu:1,id:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sl:1,sr:1,sv:1,th:1,tr:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1}}});
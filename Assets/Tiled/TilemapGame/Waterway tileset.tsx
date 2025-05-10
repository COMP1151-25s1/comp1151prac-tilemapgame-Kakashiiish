<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.11.2" name="Waterway tilesheet" tilewidth="16" tileheight="16" tilecount="198" columns="18">
 <image source="tilemap_packed.png" width="288" height="176"/>
 <tile id="1">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="1" width="16" height="15"/>
  </objectgroup>
 </tile>
 <tile id="63">
  <objectgroup draworder="index" id="2">
   <object id="1" x="0" y="0" width="16" height="16">
    <properties>
     <property name="unity:IsTrigger" value="true"/>
     <property name="unity:layer" value="Hazard"/>
    </properties>
   </object>
  </objectgroup>
 </tile>
</tileset>

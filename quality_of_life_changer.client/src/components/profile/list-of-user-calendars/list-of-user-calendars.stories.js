import ListOfUserCalendars from "./list-of-user-calendars";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ListOfUserCalendars",
  component: ListOfUserCalendars,
};

const Template = (args) => <ListOfUserCalendars {...args} />;

export const Default = Template.bind({});
Default.args = { calendars: [{ name: "name-1", url: "url-1" }] };

export const Empty = Template.bind({});
Empty.args = { calendars: [null] };

export const MultipleCalendars = Template.bind({});
MultipleCalendars.args = {
  calendars: [
    {
      name: "Otcom",
      url: "http://theatlantic.com/est/et/tempus/semper.js?mus=venenatis&vivamus=non&vestibulum=sodales&sagittis=sed&sapien=tincidunt&cum=eu&sociis=felis&natoque=fusce&penatibus=posuere&et=felis&magnis=sed&dis=lacus&parturient=morbi&montes=sem&nascetur=mauris&ridiculus=laoreet&mus=ut&etiam=rhoncus&vel=aliquet&augue=pulvinar&vestibulum=sed&rutrum=nisl&rutrum=nunc&neque=rhoncus&aenean=dui&auctor=vel&gravida=sem&sem=sed&praesent=sagittis&id=nam&massa=congue&id=risus&nisl=semper&venenatis=porta&lacinia=volutpat&aenean=quam&sit=pede&amet=lobortis&justo=ligula&morbi=sit&ut=amet&odio=eleifend&cras=pede&mi=libero&pede=quis&malesuada=orci&in=nullam&imperdiet=molestie&et=nibh&commodo=in&vulputate=lectus&justo=pellentesque&in=at&blandit=nulla&ultrices=suspendisse&enim=potenti",
    },
    {
      name: "Y-Solowarm",
      url: "https://youtu.be/feugiat/non/pretium.jsp?sapien=congue&arcu=diam&sed=id&augue=ornare&aliquam=imperdiet&erat=sapien&volutpat=urna&in=pretium&congue=nisl&etiam=ut&justo=volutpat&etiam=sapien&pretium=arcu&iaculis=sed&justo=augue&in=aliquam&hac=erat&habitasse=volutpat&platea=in&dictumst=congue&etiam=etiam&faucibus=justo&cursus=etiam&urna=pretium&ut=iaculis&tellus=justo&nulla=in&ut=hac&erat=habitasse&id=platea&mauris=dictumst&vulputate=etiam&elementum=faucibus&nullam=cursus&varius=urna&nulla=ut&facilisi=tellus&cras=nulla&non=ut&velit=erat&nec=id&nisi=mauris&vulputate=vulputate&nonummy=elementum&maecenas=nullam&tincidunt=varius&lacus=nulla&at=facilisi&velit=cras&vivamus=non&vel=velit&nulla=nec&eget=nisi",
    },
    {
      name: "Konklux",
      url: "https://about.me/vitae.aspx?congue=eu&vivamus=nibh&metus=quisque&arcu=id&adipiscing=justo&molestie=sit&hendrerit=amet&at=sapien&vulputate=dignissim&vitae=vestibulum&nisl=vestibulum&aenean=ante&lectus=ipsum&pellentesque=primis&eget=in&nunc=faucibus&donec=orci&quis=luctus&orci=et&eget=ultrices&orci=posuere&vehicula=cubilia&condimentum=curae&curabitur=nulla&in=dapibus&libero=dolor&ut=vel&massa=est&volutpat=donec&convallis=odio&morbi=justo&odio=sollicitudin&odio=ut&elementum=suscipit&eu=a&interdum=feugiat&eu=et&tincidunt=eros&in=vestibulum&leo=ac&maecenas=est&pulvinar=lacinia",
    },
    {
      name: "Fintone",
      url: "https://360.cn/adipiscing/molestie.html?duis=pede&bibendum=morbi&morbi=porttitor&non=lorem&quam=id&nec=ligula",
    },
    {
      name: "Zathin",
      url: "https://scribd.com/nisl/nunc/nisl.png?risus=vivamus&auctor=tortor&sed=duis&tristique=mattis&in=egestas&tempus=metus&sit=aenean&amet=fermentum&sem=donec&fusce=ut&consequat=mauris&nulla=eget&nisl=massa&nunc=tempor&nisl=convallis&duis=nulla&bibendum=neque&felis=libero&sed=convallis&interdum=eget&venenatis=eleifend&turpis=luctus&enim=ultricies&blandit=eu&mi=nibh&in=quisque&porttitor=id&pede=justo&justo=sit&eu=amet&massa=sapien&donec=dignissim&dapibus=vestibulum&duis=vestibulum&at=ante&velit=ipsum&eu=primis&est=in&congue=faucibus&elementum=orci&in=luctus&hac=et&habitasse=ultrices&platea=posuere&dictumst=cubilia&morbi=curae&vestibulum=nulla&velit=dapibus&id=dolor&pretium=vel&iaculis=est&diam=donec&erat=odio&fermentum=justo&justo=sollicitudin&nec=ut&condimentum=suscipit&neque=a&sapien=feugiat&placerat=et&ante=eros&nulla=vestibulum",
    },
    {
      name: "Lotstring",
      url: "http://privacy.gov.au/suscipit/a/feugiat/et.html?aenean=orci&lectus=luctus&pellentesque=et&eget=ultrices&nunc=posuere&donec=cubilia&quis=curae&orci=duis&eget=faucibus&orci=accumsan&vehicula=odio&condimentum=curabitur&curabitur=convallis&in=duis&libero=consequat&ut=dui&massa=nec&volutpat=nisi&convallis=volutpat&morbi=eleifend&odio=donec&odio=ut&elementum=dolor&eu=morbi&interdum=vel&eu=lectus&tincidunt=in&in=quam&leo=fringilla&maecenas=rhoncus&pulvinar=mauris&lobortis=enim&est=leo&phasellus=rhoncus&sit=sed&amet=vestibulum&erat=sit&nulla=amet&tempus=cursus&vivamus=id&in=turpis",
    },
    {
      name: "Biodex",
      url: "http://altervista.org/ultrices/posuere/cubilia/curae.png?cubilia=posuere&curae=cubilia&donec=curae&pharetra=nulla&magna=dapibus&vestibulum=dolor&aliquet=vel&ultrices=est&erat=donec&tortor=odio&sollicitudin=justo&mi=sollicitudin&sit=ut&amet=suscipit&lobortis=a&sapien=feugiat&sapien=et&non=eros&mi=vestibulum&integer=ac&ac=est&neque=lacinia&duis=nisi&bibendum=venenatis&morbi=tristique&non=fusce&quam=congue&nec=diam&dui=id&luctus=ornare&rutrum=imperdiet&nulla=sapien&tellus=urna&in=pretium&sagittis=nisl&dui=ut&vel=volutpat&nisl=sapien&duis=arcu&ac=sed&nibh=augue&fusce=aliquam&lacus=erat&purus=volutpat&aliquet=in&at=congue&feugiat=etiam&non=justo&pretium=etiam&quis=pretium&lectus=iaculis&suspendisse=justo&potenti=in&in=hac&eleifend=habitasse&quam=platea&a=dictumst&odio=etiam&in=faucibus&hac=cursus&habitasse=urna&platea=ut&dictumst=tellus&maecenas=nulla&ut=ut&massa=erat",
    },
    {
      name: "Stronghold",
      url: "https://nih.gov/cubilia/curae/duis/faucibus.aspx?convallis=sed&nunc=accumsan&proin=felis&at=ut&turpis=at&a=dolor&pede=quis&posuere=odio&nonummy=consequat&integer=varius&non=integer&velit=ac&donec=leo&diam=pellentesque&neque=ultrices&vestibulum=mattis&eget=odio&vulputate=donec&ut=vitae&ultrices=nisi&vel=nam&augue=ultrices&vestibulum=libero&ante=non&ipsum=mattis&primis=pulvinar&in=nulla&faucibus=pede&orci=ullamcorper&luctus=augue&et=a&ultrices=suscipit&posuere=nulla&cubilia=elit&curae=ac&donec=nulla&pharetra=sed&magna=vel&vestibulum=enim&aliquet=sit&ultrices=amet&erat=nunc&tortor=viverra&sollicitudin=dapibus&mi=nulla&sit=suscipit&amet=ligula&lobortis=in&sapien=lacus&sapien=curabitur&non=at&mi=ipsum&integer=ac&ac=tellus&neque=semper&duis=interdum&bibendum=mauris&morbi=ullamcorper&non=purus&quam=sit&nec=amet&dui=nulla&luctus=quisque&rutrum=arcu&nulla=libero&tellus=rutrum",
    },
    {
      name: "Tresom",
      url: "https://ftc.gov/pellentesque.aspx?vestibulum=ultrices&vestibulum=vel&ante=augue&ipsum=vestibulum&primis=ante&in=ipsum&faucibus=primis&orci=in&luctus=faucibus&et=orci&ultrices=luctus&posuere=et&cubilia=ultrices&curae=posuere&nulla=cubilia&dapibus=curae&dolor=donec&vel=pharetra&est=magna&donec=vestibulum&odio=aliquet&justo=ultrices&sollicitudin=erat&ut=tortor&suscipit=sollicitudin&a=mi&feugiat=sit&et=amet&eros=lobortis&vestibulum=sapien&ac=sapien&est=non&lacinia=mi&nisi=integer&venenatis=ac&tristique=neque&fusce=duis&congue=bibendum&diam=morbi&id=non&ornare=quam&imperdiet=nec&sapien=dui&urna=luctus&pretium=rutrum&nisl=nulla&ut=tellus&volutpat=in&sapien=sagittis&arcu=dui&sed=vel&augue=nisl&aliquam=duis&erat=ac&volutpat=nibh&in=fusce&congue=lacus&etiam=purus&justo=aliquet&etiam=at&pretium=feugiat&iaculis=non&justo=pretium&in=quis&hac=lectus&habitasse=suspendisse&platea=potenti&dictumst=in&etiam=eleifend&faucibus=quam&cursus=a&urna=odio&ut=in&tellus=hac&nulla=habitasse&ut=platea&erat=dictumst&id=maecenas&mauris=ut&vulputate=massa&elementum=quis",
    },
    {
      name: "Aerified",
      url: "http://amazon.co.uk/ipsum/aliquam/non/mauris.json?dui=pellentesque&proin=ultrices&leo=phasellus&odio=id&porttitor=sapien&id=in&consequat=sapien&in=iaculis&consequat=congue&ut=vivamus&nulla=metus&sed=arcu&accumsan=adipiscing&felis=molestie&ut=hendrerit&at=at&dolor=vulputate&quis=vitae&odio=nisl&consequat=aenean&varius=lectus&integer=pellentesque&ac=eget&leo=nunc&pellentesque=donec&ultrices=quis&mattis=orci&odio=eget&donec=orci&vitae=vehicula&nisi=condimentum&nam=curabitur&ultrices=in&libero=libero&non=ut&mattis=massa&pulvinar=volutpat&nulla=convallis&pede=morbi&ullamcorper=odio&augue=odio&a=elementum&suscipit=eu&nulla=interdum&elit=eu&ac=tincidunt&nulla=in&sed=leo&vel=maecenas&enim=pulvinar",
    },
  ],
};

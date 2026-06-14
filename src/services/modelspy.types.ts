export interface IContactenList {
    id?: number;
    naam: string;
    slug: string;
}

export interface IContactenDetail {
    id?: number;
    naam: string;
    straat_nummer: string;
    postcode: string;
    plaats: string;
    email: string;
    telefoon: void | string;
    kvk_nummer: void | string;
    btw_nummer: void | string;
    slug: string;
}


export interface IProjectList {
    id?: number;
    naam: string;
    hoofd_aannemer: number;
    plaats: string;
    startdatum: void | number;
    einddatum: void |number;
    klaar: void | Boolean;
  
}

export interface IProjectDetail {
    id?: number;
    naam: string;
    hoofd_aannemer: IContactenList;
    plaats: string;
    startdatum: void | number;
    einddatum: void |number;
    klaar: void | Boolean;
    aantekeningen: string;
}


export interface IWerkOmschrijvingenList{
    id?: number;
    omschrijving: string;
    eenheid: string;
    prijs: string;
}

export interface IWerkOmschrijvingenDetail{
    id?: number;
    omschrijving: string;
    eenheid: string;
    prijs: string;
    toelichting: void | string;
}


export interface IFactuurList{
    id?: number;
    factuur_nr: number;
    opdrachtgever: IContactenList;
    status: string;
    betreft: string;
    factuur_datum: number;
    uren: number;
    bedrag_totaal: number;
}

export interface IFactuurDetail{
    id?: number;
    factuur_nr: number;
    opdrachtgever: IContactenDetail;
    status: string;
    betreft: string;
    factuur_datum: number;
    herinnering_datum1: void | number;
    herinnering_datum2: void | number;
    aanmaningsdatum: void | number;
    btw_tarief: number;
    werkzaamheden_factuur: [IWerkzaamhedenDetail];
    extra_text: string;
    uren: number;
    bedrag_ex_btw: number;
    bedrag_totaal: number;
}


export interface IWerkzaamhedenList{
    id?: number;
    project: number;
    opdrachtnemer: number;
    opdrachtgever: number;
    datum_code: number;
    omschrijving: IWerkOmschrijvingenList;
    uren: string;
    aantal: string;
    klaar: Boolean;
    subtotaal: string;
}

export interface IWerkzaamhedenDetail{
    id?: number;
    project: IProjectDetail;
    opdrachtnemer: IContactenList;
    opdrachtgever: IContactenList;
    datum_code: number;
    omschrijving: IWerkOmschrijvingenDetail;
    opmerking: string;
    uren: string;
    aantal: string;
    eenheid: string;
    zelfstandigheid: number;
    klaar: Boolean;
    subtotaal: string;
}

export interface INumberList{
    number: number;
    prime: false;
    direction: number;
    position: number;
    xas: number;
    yas: number;
    lin1: string;
    lin2: string;
    lin3: string;
    lin4: string;
}

export interface IDesignerList{
    id?: number;
    xas: number;
    yas: number;
    colour: string;
    lifespan_type: number;
    hide: boolean;
}
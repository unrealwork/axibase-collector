# Overview

This list contains references to datasets released by State Governments on [data.gov](http://catalog.data.gov/dataset?q=&sort=views_recent+desc&organization_type=State+Government&res_format=JSON) in [Socrata](https://github.com/socrata) format (JSON).

#Series
## Datasets

| **State** | **Name** | **Attribution** |
|:---|:---|:---|
| Illinois | [Abortion Demographics, 1995-2012](#abortion-demographics-1995-2012) | Illinois Department of Public Health, Office of Finance and Administration, Division of Vital Records | 
| Maryland | [Anne Arundel County Crime Rate By Type](#anne-arundel-county-crime-rate-by-type) | MSAC |
| New York | [Automobiles Annual Imports and Exports Through Port Authority of NY NJ Maritime Terminals: Beginning 2000](#automobiles-annual-imports-and-exports-through-port-authority-of-ny-nj-maritime-terminals-beginning-2000) | The Port Authority of New York & New Jersey |
| Maryland | [Employment Figures](#employment-figures) | Bureau of Labor Statistics |
| New York | [Solar Photovoltaic (PV) Incentive Program Completed Projects by City and Contractor: Beginning 2010](#solar-photovoltaic-pv-incentive-program-completed-projects-by-city-and-contractor-beginning-2010) | New York State Energy Research and Development Authority |
| Hawaii | [Table 17: Solid Waste Recycled (in tons)](#table-17-solid-waste-recycled-in-tons) | Iowa Department of Education, Adequate Yearly Progress |
| Iowa | [Math And Reading Proficiency by School Year, Public School District and Grade Level](#math-and-reading-proficiency-by-school-year-public-school-district-and-grade-level) | Iowa Department of Education, Adequate Yearly Progress |
| Hawaii | [AAA Fuel Prices](#aaa-fuel-prices) | Department of Economic Development and Tourism |
| Connecticut | [Sales and Use Tax per Town by NAICS (2013 and 2014)](#sales-and-use-tax-per-town-by-naics-2013-and-2014) | Department of Revenue Services |
| Maryland | [Per Capita Electricity Consumption](#per-capita-electricity-consumption) | MEA |
| Maryland | [MVA Vehicle Sales Counts by Month for CY 2002 - 2015](#mva-vehicle-sales-counts-by-month-for-cy-2002-2015) | Motor Vehicle Administration |
| Hawaii | [OAHU Food Establishments](#oahu-food-establishments) | Department of Health |

## Abortion Demographics, 1995-2012

| **Name** | **Value** |
|:---|:---|
| Id | f7nd-jj28 |
| Name | Abortion Demographics, 1995-2012 |
| State | [Illinois](https://data.illinois.gov) |
| Description | The number of induced pregnancy terminations reported in Illinois by county (if in excess of 50), by age and marital status.<br>Note: Marital status and age are only for Illinois residents. |
| Attribution | Illinois Department of Public Health, Office of Finance and Administration, Division of Vital Records |
| Category | Health |
| Date Range | 1995-2012 |
| Links | [catalog](http://catalog.data.gov/dataset/abortion-demographics-1995-2012-8f496),  [metadata](https://data.illinois.gov/api/views/f7nd-jj28),  [data](https://data.illinois.gov/api/views/f7nd-jj28/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/8f514d6d/33/) |

### Command

```ls
series e:f7nd-jj28 d:1995-01-01T00:00:00.000Z t:year=TOTAL m:f7nd-jj28.value=52300
```
<!--
### Fields

| **Name** | **Type** |
|:---|:---|
| a | metric |
| b | tag |
| c | time |
| d | ignored |
-->

<!-- Insert Data set by nikitachrs-->
## Anne Arundel County Crime Rate By Type

| **Name** | **Value** |
|:---|:---|
| Id | 3fys-ggpk |
| Name | Anne Arundel County Crime Rate By Type |
| State | [Maryland](https://data.maryland.gov) |
| Description | Historical crime rates per 100,000 people, 1975 - present. |
| Attribution | MSAC |
| Category | Public Safety |
| Date Range | 1975-2012 |
| Links | [catalog](http://catalog.data.gov/dataset/anne-arundel-county-crime-rate-by-type-e5923), [attribution](http://www.goccp.maryland.gov/msac/crime-statistics-county.php?id=18), [metadata](https://data.maryland.gov/api/views/3fys-ggpk),  [data](https://data.maryland.gov/api/views/3fys-ggpk/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/8f514d6d/34/) |

### Command

```ls
series e:3fys-ggpk d:1975-01-01T00:00:00.000Z m:property_crime_rate=6151.1 m:larceny_theft=3843.2
m:murder=4.8 m:robbery=124.6 m:total_crime_rate=6759.7 m:b_e=1708.6 m:agg_assault=456.9 
m:m_v_theft=599.3 m:violent_crime_rate=608.6 m:rape=22.3 m:population=331390
```

## Automobiles Annual Imports and Exports Through Port Authority of NY NJ Maritime Terminals: Beginning 2000

| **Name** | **Value** |
|:---|:---|
| Id | u49g-d7hw |
| Name | Automobiles Annual Imports and Exports Through Port Authority of NY NJ Maritime Terminals: Beginning 2000 |
| State | [New York](https://data.ny.gov) |
| Description | This dataset represents the total number of Automobiles Imported and Exported annually through maritime terminals located within Port Authority property in the Port of New York and New Jersey in vehicle units beginning 2000 |
| Attribution | The Port Authority of New York & New Jersey |
| Category | Transportation |
| Date Range | 2000-2015 |
| Links | [catalog](http://catalog.data.gov/dataset/automobiles-annual-imports-and-exports-through-port-authority-of-ny-nj-maritime-terminals-), [attribution](http://www.panynj.gov/port/pdf/port-trade-statistics-summary-2001-2011.pdf), [metadata](https://data.ny.gov/api/views/u49g-d7hw), [data](https://data.ny.gov/api/views/u49g-d7hw/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/8f514d6d/35/) |

### Command

```ls
series e:u49g-d7hw d:2015-01-01T00:00:00.000Z t:type=Imports m:volume=433822
```

## Employment Figures

| **Name** | **Value** |
|:---|:---|
| Id | je5z-53wn |
| Name | Employment Figures |
| State | [Maryland](https://data.maryland.gov) |
| Description | Figures come from the Bureau of Labor Statistics, and are subject to revision. |
| Attribution | Bureau of Labor Statistics |
| Category | Business and Economy |
| Date Range | 2003-2014 |
| Links | [catalog](http://catalog.data.gov/dataset/employment-figures-f55ae), [attribution](http://www.bls.gov/),  [metadata](https://data.maryland.gov/api/views/je5z-53wn),  [data](https://data.maryland.gov/api/views/je5z-53wn/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/8f514d6d/36/) |

### Command

```ls
series e:je5z-53wn d:2003-01-01T00:00:00.000Z t:month=Jan-03 m:maryland_jobs=2481200 
m:national_jobs_created_lost=89000 m:maryland_jobs_created_lost=3800 m:national_jobs=130380000 
m:national_unemployment_rate=5.8 m:maryland_unemployment_rate=4.4 
m:maryland_civilian_labor_force=2877486 m:maryland_unemployment=126413 m:maryland_employment=2751073
```

## Solar Photovoltaic (PV) Incentive Program Completed Projects by City and Contractor: Beginning 2010

| **Name** | **Value** |
|:---|:---|
| Id | 3pzs-2zsk |
| Name | Solar Photovoltaic (PV) Incentive Program Completed Projects by City and Contractor: Beginning 2010 |
| State | [New York](https://data.ny.gov) |
| Description | The Solar Photovoltaic (PV) Incentive Program Completed Projects by City and Contractor Dataset provides market insight into the volume of work and photovoltaic (PV) capacity installed in New York State annually, by city and contractor, beginning August 2010 under the New York State Energy Research and Development Authority (NYSERDA)’s NY-Sun Solar Electric Incentive Program Opportunity Notice (PON) 2112.The dataset includes the following data points: Project Install Year, Contractor, County, City, Project Count by City, Project Cost, NYSERDA Incentives, Kilowatt Capacity, Expected Annual Kilowatt Hour Production, and NYSERDA Solicitation. |
| Attribution | New York State Energy Research and Development Authority |
| Category | Energy & Environment |
| Date Range | 2010-2015 |
| Links | [catalog](http://catalog.data.gov/dataset/solar-photovoltaic-pv-incentive-program-completed-projects-by-city-and-contractor-beginnin), [metadata](https://data.ny.gov/api/views/3pzs-2zsk),  [data](https://data.ny.gov/api/views/3pzs-2zsk/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/8f514d6d/37/) |

### Command

```ls
series e:3pzs-2zsk d:2010-01-01T00:00:00.000Z t:county=Allegany t:contractor=Other 
t:solicitation="PON 2112" t:city=Other m:project_count_by_city=1 m:project_cost=34440 
m:total_nameplate_kw=4.6 m:expected_kwh_annual_production=5399.66 m:incentive_dollars=8050
```

## Table 17: Solid Waste Recycled (in tons)

| **Name** | **Value** |
|:---|:---|
| Id | v48g-wbhi |
| Name | Table 17: Solid Waste Recycled (in tons) |
| State | [Hawaii](https://data.hawaii.gov) |
| Description | DOH Environmental Indicators |
| Attribution | DOH |
| Category | Health |
| Date Range | 2004-2008 |
| Links | [catalog](http://catalog.data.gov/dataset/table-17-solid-waste-recycled-in-tons-851c9), [attribution](http://hawaii.gov/doh), [metadata](https://data.hawaii.gov/api/views/v48g-wbhi),  [data](https://data.hawaii.gov/api/views/v48g-wbhi/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/8f514d6d/38/) |

### Command

```ls
series e:v48g-wbhi d:2004-01-01T00:00:00.000Z m:percent_diverted=32.5 m:_=1 m:disposed_statewide=1427904 
m:diverted_statewide=688820 m:produced_statewide=2116724
```

## Math And Reading Proficiency by School Year, Public School District and Grade Level

| **Name** | **Value** |
|:---|:---|
| Id | f3h8-mnxi |
| Name | Math And Reading Proficiency by School Year, Public School District and Grade Level |
| State | [Iowa](https://data.iowa.gov) |
| Description | Dataset contains information on public school districts academic progress of their students in reading and math annually starting with school year ending in 2003.  All public schools and districts report annually to the Iowa Department of Education through Adequate Yearly Progress (AYP)<br>All AYP determinations are made annually using reading and math student assessment data.  Proficiency is based on a standard score scale.  More information can be found at: http://itp.education.uiowa.edu/ia/AYPInformation.aspx |
| Attribution | Iowa Department of Education, Adequate Yearly Progress |
| Category | Education |
| Date Range | 2003-2015 |
| Links | [catalog](http://catalog.data.gov/dataset/math-and-reading-proficiency-by-school-year-public-school-district-and-grade-level), [attribution](http://itp.education.uiowa.edu/ia/AYPInformation.aspx), [metadata](https://data.iowa.gov/api/views/f3h8-mnxi),  [data](https://data.iowa.gov/api/views/f3h8-mnxi/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/8f514d6d/39/) |

### Command

```ls
series e:f3h8-mnxi d:2003-01-01T00:00:00.000Z t:topic=Reading t:district_name=Central 
t:proficient_category="60.1 - 70%" m:total=59 m:proficient_2=67.8 m:grade=11 
m:district=1080 m:proficient_1=40
```

## AAA Fuel Prices

| **Name** | **Value** |
|:---|:---|
| Id | dqp6-3idi |
| Name | AAA Fuel Prices |
| State | [Hawaii](https://data.hawaii.gov) |
| Description | AAA Monthly Fuel Prices |
| Attribution | Department of Economic Development and Tourism |
| Category | Economic Development |
| Date Range | 2006-2012 |
| Links | [catalog](http://catalog.data.gov/dataset/aaa-fuel-prices-52bf0), [attribution](http://hawaii.gov/dbedt),  [metadata](https://data.hawaii.gov/api/views/dqp6-3idi),  [data](https://data.hawaii.gov/api/views/dqp6-3idi/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/8f514d6d/40/) |

### Command

```ls
series e:dqp6-3idi d:2006-01-01T00:00:00.000Z t:county=US t:fuel="Gasoline - Regular" 
t:physicalunit=Dollars m:price=2.314
```

## Sales and Use Tax per Town by NAICS (2013 and 2014)

| **Name** | **Value** |
|:---|:---|
| Id | rkm7-uwkb |
| Name | Sales and Use Tax per Town by NAICS (2013 and 2014) |
| State | [Connecticut](https://data.ct.gov) |
| Description | Sales and use tax data, by quarter, by town, disaggreagted by North America Industrial Classification (NAICS) groups for calendar years 2013 and 2014.  The data available is unique to each municipality as detailed NAICS information is only provided where there are ten or more taxpayers in a given category.<br>This data will be updated annually so that all four quarters of a calendar year are available at once.  This list reflects the tax collected at both the 6.35% and 7% rates, where applicable |
| Attribution | Department of Revenue Services |
| Category | Government |
| Date Range | 2013-2014 |
| Links | [catalog](http://catalog.data.gov/dataset/sales-and-use-tax-per-town-by-naics-2013-and-2014), [attribution](http://www.ct.gov/drs/cwp/view.asp?a=4128&q=483506), [metadata](https://data.ct.gov/api/views/rkm7-uwkb),  [data](https://data.ct.gov/api/views/rkm7-uwkb/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/8f514d6d/41/) |

### Command

```ls
series e:rkm7-uwkb d:2014-01-01T00:00:00.000Z t:naics_industry_code="230 Construction" 
t:municipality="OUT OF COUNTRY" m:taxpayer_count=16 m:total_tax_due_at_7=0 
m:retail_sales_of_goods=0 m:total_tax_due_at_6_35=0
```

## Per Capita Electricity Consumption

| **Name** | **Value** |
|:---|:---|
| Id | 64jf-g2fe |
| Name | Per Capita Electricity Consumption |
| State | [Maryland](https://data.maryland.gov) |
| Description | Data are provided by the Maryland Energy Administration (MEA). Data show per capita electricity usage overall and usage demand during times of peak electricity use (peak demand). |
| Attribution | MEA |
| Category | Energy and Environment |
| Date Range | 2007-2015 |
| Links | [catalog](http://catalog.data.gov/dataset/per-capita-electricity-consumption-7b888), [attribution](http://energy.maryland.gov/), [metadata](https://data.maryland.gov/api/views/64jf-g2fe),  [data](https://data.maryland.gov/api/views/64jf-g2fe/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/8f514d6d/42/) |

### Command

```ls
series e:64jf-g2fe d:2007-01-01T00:00:00.000Z m:per_capita_consumption_2015_goal=10.521
m:actual_per_capita_consumption=12.38 m:empower_per_capita_consumption_annual_goal=12.38 
m:peak_demand_2015_goal=2.173 m:per_capita_consumption_2015_goal_percent_below_baseline=-15
m:peak_demand_percent_below_2007_baseline_goal_15=0 m:empower_peak_demand_annual_goals=2.56
m:per_capita_consumption_percent_below_2007_baseline=0 
m:peak_demand_2015_goal_percent_below_baseline=-15 m:peak_demand_annual_goals_percent_below_baseline=0
m:actual_peak_demand=2.56 m:consumption_annual_goals_percent_below_baseline=0
```

## MVA Vehicle Sales Counts by Month for CY 2002 - 2015

| **Name** | **Value** |
|:---|:---|
| Id | un65-7ipd |
| Name | MVA Vehicle Sales Counts by Month for CY 2002 - 2015 |
| State | [Maryland](https://data.maryland.gov) |
| Description | The number of new and used vehicles and the sales dollars respectively sold by month.Data as of October 2015 |
| Attribution | Motor Vehicle Administration |
| Category | Transportation |
| Date Range | 2007-2015 |
| Links | [catalog](http://catalog.data.gov/dataset/mva-vehicle-sales-counts-by-month-for-cy-2002-2015), [attribution](http://www.mva.maryland.gov/), [metadata](https://data.maryland.gov/api/views/un65-7ipd),  [data](https://data.maryland.gov/api/views/un65-7ipd/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/8f514d6d/43/) |

### Command

```ls
series e:un65-7ipd d:2002-01-01T00:00:00.000Z t:month=JAN m:new=31106 m:total_sales_used=386481929 
m:used=49927 m:total_sales_new=755015820
```

## OAHU Food Establishments

| **Name** | **Value** |
|:---|:---|
| Id | qkvm-skze |
| Name | OAHU Food Establishments |
| State | [Hawaii](https://data.hawaii.gov) |
| Description | Lists represent all of the permitted Food Establishments.  These include everything from Restaurants, take out, Fast-food, Convenience stores, Mom and Pop Markets, shave ice stands, supermarkets, Mega markets like Costco-Sam’s-Walmart, lunch wagons, food manufacturers, etc |
| Attribution | Department of Health |
| Category | Health |
| Date Range | 2005-2012 |
| Links | [catalog](http://catalog.data.gov/dataset/oahu-food-establishments-8adda), [metadata](https://data.hawaii.gov/api/views/qkvm-skze),  [data](https://data.hawaii.gov/api/views/qkvm-skze/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/8f514d6d/44/) |

### Command

```ls
series e:qkvm-skze d:2011-07-25T00:00:00.000Z t:establishment="MATSUMOTO'S OKAZUYA RESTAURANT, LLC" 
t:facility_type="137 New and Renewal 1" t:mailing_address_zip_code=96817 t:permit_holder="TODD MATSUMOTO"
t:establishment_address_zip_code=96817 t:risk_category="Category 1" 
t:mailing_address_street_name="GULICK AVENUE" t:business_status=Open 
t:establishment_address_state=HAWAII t:establishment_address_city=HONOLULU 
t:mailing_address_state=HAWAII t:telephone=(808)721-7464 
t:establishment_address_street_name="GULICK AVENUE" t:mailing_address_city=HONOLULU 
m:tmkzone=1 m:facility_permit=8807 m:tmkparcel=24 m:tmkplat=7 m:establishment_permit=8807 m:tmksection=3
```

#Messages
## Datasets

| **State** | **Name** | **Attribution** |
|:---|:---|:---|
| Washington | [Attorney General Consumer Complaints](#attorney-general-consumer-complaints) | Washington State Attorney General's Office Consumer Protection Division |
| Connecticut | [Insurance Company Complaints, Resolutions, Status, and Recoveries](#insurance-company-complaints-resolutions-status-and-recoveries) | Department of Insurance |
| New York | [Lottery Powerball Winning Numbers: Beginning 2010](#lottery-powerball-winning-numbers-beginning-2010) | New York State Gaming Commission |
| New York | [Lottery Mega Millions Winning Numbers: Beginning 2002](#lottery-mega-millions-winning-numbers-beginning-2002) | New York State Gaming Commission |
| Oregon | [New Business List - June](#new-business-list-june) |  |
| Oregon | [UCC List of Filings Entered Last Month](#ucc-list-of-filings-entered-last-month) |  |
| New York | [Lottery Cash 4 Life Winning Numbers: Beginning 2014](#lottery-cash-4-life-winning-numbers-beginning-2014) | New York State Gaming Commission |
| Connecticut | [Accidental Drug Related Deaths 2012-2015](#accidental-drug-related-deaths-2012-2015) | Office of the Chief Medical Examiner |
| Oregon | [Oregon Consumer Complaints](#oregon-consumer-complaints) | Oregon Department of Justice |


## Attorney General Consumer Complaints

| **Name** | **Value** |
|:---|:---|
| Id | gpri-47xz |
| Name | Attorney General Consumer Complaints |
| State | [Washington](https://data.wa.gov) |
| Description | Complaint data from consumer complaints filed with the Consumer Protection Division. <br>The existence of a complaint is not evidence of wrongdoing. |
| Attribution | Washington State Attorney General's Office Consumer Protection Division |
| Date Range | 2013-2016 |
| Links | [catalog](http://catalog.data.gov/dataset/attorney-general-consumer-complaints),    [metadata](https://data.wa.gov/api/views/gpri-47xz),  [data](https://data.wa.gov/api/views/gpri-47xz/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/17/) |

### Command

```ls
message e:gpri-47xz d:2016-04-12T00:00:00.000Z t:id=483906 t:businesszip=98148-1220 t:openedyear=2016.0
t:naics="713940-Fitness & Recreational Industries" t:businessstate=WA 
t:source="Washington State Attorney General's Office Consumer Protection Division" 
t:status=Open t:business_id=257432 t:type="Attorney General Consumer Complaints" 
t:business="Highline Athletic Club" t:businesscity=Burien m:""
```

## Insurance Company Complaints, Resolutions, Status, and Recoveries

| **Name** | **Value** |
|:---|:---|
| Id | t64r-mt64 |
| Name | Insurance Company Complaints, Resolutions, Status, and Recoveries |
| State | [Connecticut](https://data.ct.gov) |
| Description | Listing of consumer complaints filed against Insurance companies licensed in Connecticut.<br>This dataset includes the Company, Line of Business, nature of complaint, outcome or resolution, and recovery. |
| Attribution | Department of Insurance |
| Category | Business |
| Date Range | 2007-2016 |
| Links | [catalog](http://catalog.data.gov/dataset/insurance-company-complaints-resolutions-status-and-recoveries), [attribution](http://www.ct.gov/cid), [metadata](https://data.ct.gov/api/views/t64r-mt64),  [data](https://data.ct.gov/api/views/t64r-mt64/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/18/) |

### Command

```ls
message e:t64r-mt64 d:2013-05-15T00:00:00.000Z t:file_no=302165.0 t:source="Department of Insurance" 
t:coverage="Auto Medical Payment" t:reason="Unfair Claims Practice" t:status=Closed 
t:company="21st Century Assurance Company" t:subreason="Claim Delays" t:closed=2013-08-13T00:00:00 
t:conclusion=Unjustified t:type=Business t:disposition="Claim Settled" t:recovery=2586.0 m:""
```

## Lottery Powerball Winning Numbers: Beginning 2010

| **Name** | **Value** |
|:---|:---|
| Id | d6yy-54nr |
| Name | Lottery Powerball Winning Numbers: Beginning 2010 |
| State | [New York](https://data.ny.gov) |
| Description | Go to http://on.ny.gov/1GpWiHD on the New York Lottery website for past Powerball results and payouts. |
| Attribution | New York State Gaming Commission |
| Category | Government & Finance |
| Date Range | 2010-2016 |
| Links | [catalog](http://catalog.data.gov/dataset/lottery-powerball-winning-numbers-beginning-2010), [attribution](http://nylottery.ny.gov/wps/portal/Home/Lottery/home/your+lottery/drawing+results/drawingresults_powerball), [metadata](https://data.ny.gov/api/views/d6yy-54nr),  [data](https://data.ny.gov/api/views/d6yy-54nr/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/19/) |

### Command

```ls
message e:d6yy-54nr d:2010-02-03T00:00:00.000Z t:winning_numbers="17 22 36 37 52 24" 
t:source="New York State Gaming Commission" t:type="Government & Finance" t:multiplier=2.0 m:""
```

## Lottery Mega Millions Winning Numbers: Beginning 2002

| **Name** | **Value** |
|:---|:---|
| Id | 5xaw-6ayf |
| Name | Lottery Mega Millions Winning Numbers: Beginning 2002 |
| State | [New York](https://data.ny.gov) |
| Description | Go to http://on.ny.gov/1J8tPSN on the New York Lottery website for past Mega Millions results and payouts.|
| Attribution | New York State Gaming Commission |
| Category | Government & Finance |
| Date Range | 2002-2016 |
| Links | [catalog](http://catalog.data.gov/dataset/lottery-mega-millions-winning-numbers-beginning-2002), [attribution](http://nylottery.ny.gov/wps/portal/Home/Lottery/home/your+lottery/drawing+results/drawingresultsmega), [metadata](https://data.ny.gov/api/views/5xaw-6ayf),  [data](https://data.ny.gov/api/views/5xaw-6ayf/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/20/) |

### Command

```ls
message e:5xaw-6ayf d:2002-05-17T00:00:00.000Z t:winning_numbers="15 18 25 33 47" 
t:source="New York State Gaming Commission" t:type="Government & Finance" t:mega_ball=30 m:""
```

## New Business List - June

| **Name** | **Value** |
|:---|:---|
| Id | i8h7-mn6v |
| Name | New Business List - June |
| State | [Oregon](https://data.oregon.gov) |
| Description | Businesses registered with the Secretary of State Corporation Division during the month of June. |
| Category | Business |
| Date Range | June 2016 |
| Links | [catalog](http://catalog.data.gov/dataset/new-business-list-june-1accb),  [metadata](https://data.oregon.gov/api/views/i8h7-mn6v),  [data](https://data.oregon.gov/api/views/i8h7-mn6v/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/21/) |

### Command

```ls
message e:i8h7-mn6v d:2016-06-01T00:00:00.000Z t:business_name="12 STONE CONTRACTING GROUP, INC."
t:associated_name_type="MAILING ADDRESS" t:source=i8h7-mn6v t:zip_code=31106 t:address="PO BOX 8958" 
t:state=GA t:type=Business t:entity_type="FOREIGN BUSINESS CORPORATION" 
t:city=ATLANTA t:registry_number=122151194 m:""
```

## UCC List of Filings Entered Last Month

| **Name** | **Value** |
|:---|:---|
| Id | snfi-f79b |
| Name | UCC List of Filings Entered Last Month |
| State | [Oregon](https://data.oregon.gov) |
| Description | Updated 8/1/2016 List of New UCC filings entered during the previous month.  This list will be updated by the 9th of every month. |
| Category | Business |
| Date Range | July 2016 |
| Links | [catalog](http://catalog.data.gov/dataset/ucc-list-of-filings-entered-last-month-7c45d),  [metadata](https://data.oregon.gov/api/views/snfi-f79b),  [data](https://data.oregon.gov/api/views/snfi-f79b/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/22/) |

### Command

```ls
message e:snfi-f79b d:2016-07-28T00:00:00.000Z t:lapse_date=2022-01-27T00:00:00 t:file_number=1866-23 
t:entity="KEYBANK NATIONAL ASSOCIATION" t:st_cd_txt=OH t:zip_code_txt=44144 t:type=Business 
t:file_type=AMENDMENT t:lien_type=UCC t:source=snfi-f79b t:city_descr=BROOKLYN t:party_type=SP 
t:entity_type=ORG t:mail_addr_1="4910 TIEDEMAN ROAD" t:cntry_cd_txt=USA t:original_file_number=1866 m:""
```

## Lottery Cash 4 Life Winning Numbers: Beginning 2014

| **Name** | **Value** |
|:---|:---|
| Id | kwxv-fwze |
| Name | Lottery Cash 4 Life Winning Numbers: Beginning 2014 |
| State | [New York](https://data.ny.gov) |
| Description | Go to http://on.ny.gov/1xRIvPz on the New York Lottery website for past Cash 4 Life results and payouts. |
| Attribution | New York State Gaming Commission |
| Category | Government & Finance |
| Date Range | 2014-2016 |
| Links | [catalog](http://catalog.data.gov/dataset/lottery-cash-4-life-winning-numbers-beginning-2014), [attribution](http://nylottery.ny.gov/wps/portal/Home/Lottery/home/your+lottery/drawing+results/drawingresults_cash4life), [metadata](https://data.ny.gov/api/views/kwxv-fwze),  [data](https://data.ny.gov/api/views/kwxv-fwze/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/23/) |

### Command
```ls
message e:kwxv-fwze d:2014-06-16T00:00:00.000Z t:winning_numbers="09 36 44 53 59" 
t:source="New York State Gaming Commission" t:type="Government & Finance" t:cash_ball=03 m:""
```

## Accidental Drug Related Deaths 2012-2015

| **Name** | **Value** |
|:---|:---|
| Id | rybz-nyjw |
| Name | Accidental Drug Related Deaths  2012-2015 |
| State | [Connecticut](https://data.ct.gov) |
| Description | A listing of each accidental death associated with drug overdose in Connecticut from 2012 to 2015. A "Y" value under the different substance columns indicates that particular substance was detected.Data are derived from an investigation by the Office of the Chief Medical Examiner which includes the toxicity report, death certificate, as well as a scene investigation.The “Morphine (Not Heroin)” values are related to the differences between how Morphine and Heroin are metabolized and therefor detected in the toxicity results. Heroin metabolizes to 6-MAM which then metabolizes to morphine.  6-MAM is unique to heroin, and has a short half-life (as does heroin itself). Thus, in some heroin deaths, the toxicity results will not indicate whether the morphine is from heroin or prescription morphine. In these cases the Medical Examiner may be able to determine the cause based on the scene investigation (such as  finding heroin needles). If they find prescription morphine at the scene it is certified as “Morphine (not heroin).” The refor, the Cause of Death may indicate Morphine, but the Heroin or Morphine (Not Heroin) may not be indicated.“Any Opioid” – If the Medical Examiner cannot conclude whether it’s RX Morphine or heroin based morphine in the toxicity results, that column may be checked |
| Attribution | Office of the Chief Medical Examiner |
| Category | Health and Human Services |
| Date Range | 2012-2015 |
| Links | [catalog](http://catalog.data.gov/dataset/accidental-drug-related-deaths-january-2012-sept-2015), [attribution](http://www.ct.gov/ocme), [metadata](https://data.ct.gov/api/views/rybz-nyjw),  [data](https://data.ct.gov/api/views/rybz-nyjw/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/24/) |

### Command
```ls
message e:rybz-nyjw d:2014-06-28T00:00:00.000Z t:casenumber=14-9876 t:hydr_cod=Y 
t:source="Office of the Chief Medical Examiner" t:mannerofdeath=Accident t:benzo_s=Y 
t:immediatecausea="Acute fent, hydrocod, benzodiazepine" t:type="Health and Human Services" 
t:fentanyl=Y m:""
```

## Oregon Consumer Complaints

| **Name** | **Value** |
|:---|:---|
| Id | 2ix7-8hwk |
| Name | Oregon Consumer Complaints |
| State | [Oregon](https://data.oregon.gov) |
| Description | Consumer complaints registered with the Oregon Dept. of Justice.  The database of consumer complaints is derived from consumer contacts for the past 3 years and is for information only. This database may not offer a completely accurate or comprehensive account of every incident. Several factors, including a company’s size and volume of transactions, may affect the likelihood of a consumer complaint being filed. The number of complaints about a business may not be a reliable measure as to whether it is appropriately conducting business.The information in this database is updated as soon as possible. However, recently submitted complaints may not be immediately available.The statements in this database do not necessarily reflect the opinion of the DOJ.For more information, see http://www.doj.state.or.us/finfraud/index.shtml |
| Attribution | Oregon Department of Justice |
| Category | Public Safety |
| Date Range | 2013-2016 |
| Links | [catalog](http://catalog.data.gov/dataset/oregon-consumer-complaints-7f511), [attribution](http://www.doj.state.or.us/), [metadata](https://data.oregon.gov/api/views/2ix7-8hwk),  [data](https://data.oregon.gov/api/views/2ix7-8hwk/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/c6ee7c4c/25/) |

### Command
```ls
message e:2ix7-8hwk d:2014-03-05T00:00:00.000Z t:complaint_description=
"Provided goods or services different than the ones complainant ordered; unauthorized work" 
t:respondent="7-ELEVEN, INC*" t:zip=752210711 t:status=Closed t:closing_description="Voluntarily Resolved" 
t:state=TX t:address_1="CUSTOMER RELATIONS" t:reference_no_=FF1411-14 t:address_2="PO BOX 711" 
t:type="Public Safety" t:city=DALLAS t:source="Oregon Department of Justice" 
t:date_closed=2014-06-27T00:00:00 t:business_type="Fuel: Gasoline Stations" m:""
```

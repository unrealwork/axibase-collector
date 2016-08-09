# Overview

This list contains references to datasets released by State Governments on [data.gov](http://catalog.data.gov/dataset?_res_format_sortAlpha=asc&_organization_limit=0&organization_type=State+Government&res_format=JSON&_res_format_limit=0) in [Socrata](https://github.com/socrata) format (JSON).

## Datasets

| **State** | **Name** | **Attribution** |
|:---|:---|:---|
| Illinois | [Abortion Demographics, 1995-2012](#abortion-demographics-1995-2012) | Illinois Department of Public Health, Office of Finance and Administration, Division of Vital Records | 
| Maryland | [Anne Arundel County Crime Rate By Type](#anne-arundel-county-crime-rate-by-type) | MSAC |
| Washington | [Attorney General Consumer Complaints](#attorney-general-consumer-complaints) | Washington State Attorney General's Office Consumer Protection Division |
| Connecticut | [Insurance Company Complaints, Resolutions, Status, and Recoveries](#insurance-company-complaints-resolutions-status-and-recoveries) | Department of Insurance |
| New York | [Automobiles Annual Imports and Exports Through Port Authority of NY NJ Maritime Terminals: Beginning 2000](#automobiles-annual-imports-and-exports-through-port-authority-of-ny-nj-maritime-terminals-beginning-2000) | The Port Authority of New York & New Jersey |
| Maryland | [Employment Figures](#employment-figures) | Bureau of Labor Statistics |
| New York | [Solar Photovoltaic (PV) Incentive Program Completed Projects by City and Contractor: Beginning 2010](#solar-photovoltaic-pv-incentive-program-completed-projects-by-city-and-contractor-beginning-2010) | New York State Energy Research and Development Authority |
| Hawaii | [Table 17: Solid Waste Recycled (in tons)](#table-17-solid-waste-recycled-in-tons) | Iowa Department of Education, Adequate Yearly Progress |
| Iowa | [Math And Reading Proficiency by School Year, Public School District and Grade Level](#math-and-reading-proficiency-by-school-year-public-school-district-and-grade-level) | Iowa Department of Education, Adequate Yearly Progress |
| Hawaii | [AAA Fuel Prices](#aaa-fuel-prices) | Department of Economic Development and Tourism |
| Connecticut | [Sales and Use Tax per Town by NAICS (2013 and 2014)](#sales-and-use-tax-per-town-by-naics-2013-and-2014) | Department of Revenue Services |

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
| Links | [catalog](http://catalog.data.gov/dataset/abortion-demographics-1995-2012-8f496),  [metadata](https://data.illinois.gov/api/views/f7nd-jj28),  [data](https://data.illinois.gov/api/views/f7nd-jj28/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/) |

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
| Links | [catalog](http://catalog.data.gov/dataset/anne-arundel-county-crime-rate-by-type-e5923), [attribution](http://www.goccp.maryland.gov/msac/crime-statistics-county.php?id=18), [metadata](https://data.maryland.gov/api/views/3fys-ggpk),  [data](https://data.maryland.gov/api/views/3fys-ggpk/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/) |

### Command

```ls
series e:3fys-ggpk d:1975-01-01T00:00:00.000Z m:property_crime_rate=6151.1 m:larceny_theft=3843.2
m:murder=4.8 m:robbery=124.6 m:total_crime_rate=6759.7 m:b_e=1708.6 m:agg_assault=456.9 
m:m_v_theft=599.3 m:violent_crime_rate=608.6 m:rape=22.3 m:population=331390
```

## Attorney General Consumer Complaints

| **Name** | **Value** |
|:---|:---|
| Id | gpri-47xz |
| Name | Attorney General Consumer Complaints |
| State | [Washington](https://data.wa.gov) |
| Description | Complaint data from consumer complaints filed with the Consumer Protection Division. <br>The existence of a complaint is not evidence of wrongdoing. |
| Attribution | Washington State Attorney General's Office Consumer Protection Division |
| Date Range | 2013-2016 |
| Links | [catalog](http://catalog.data.gov/dataset/attorney-general-consumer-complaints),    [metadata](https://data.wa.gov/api/views/gpri-47xz),  [data](https://data.wa.gov/api/views/gpri-47xz/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/) |

### Command

```ls
series e:gpri-47xz d:2016-04-12T00:00:00.000Z t:id=483906 t:businesszip=98148-1220 
t:naics="713940-Fitness & Recreational Industries" t:businessstate=WA t:status=Open 
t:business_id=257432 t:business="Highline Athletic Club" t:businesscity=Burien m:openedyear=2016
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
| Links | [catalog](http://catalog.data.gov/dataset/insurance-company-complaints-resolutions-status-and-recoveries), [attribution](http://www.ct.gov/cid), [metadata](https://data.ct.gov/api/views/t64r-mt64),  [data](https://data.ct.gov/api/views/t64r-mt64/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/) |

### Command

```ls
series e:t64r-mt64 d:2013-05-15T00:00:00.000Z t:status=Closed t:reason="Unfair Claims Practice" 
t:coverage="Auto Medical Payment" t:subreason="Claim Delays" t:company="21st Century Assurance Company" 
t:conclusion=Unjustified t:disposition="Claim Settled" m:file_no=302165 m:recovery=2586
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
| Links | [catalog](http://catalog.data.gov/dataset/automobiles-annual-imports-and-exports-through-port-authority-of-ny-nj-maritime-terminals-), [attribution](http://www.panynj.gov/port/pdf/port-trade-statistics-summary-2001-2011.pdf), [metadata](https://data.ny.gov/api/views/u49g-d7hw), [data](https://data.ny.gov/api/views/u49g-d7hw/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/) |

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
| Links | [catalog](http://catalog.data.gov/dataset/employment-figures-f55ae), [attribution](http://www.bls.gov/),  [metadata](https://data.maryland.gov/api/views/je5z-53wn),  [data](https://data.maryland.gov/api/views/je5z-53wn/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/) |

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
| Links | [catalog](http://catalog.data.gov/dataset/solar-photovoltaic-pv-incentive-program-completed-projects-by-city-and-contractor-beginnin), [metadata](https://data.ny.gov/api/views/3pzs-2zsk),  [data](https://data.ny.gov/api/views/3pzs-2zsk/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/) |

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
| Links | [catalog](http://catalog.data.gov/dataset/table-17-solid-waste-recycled-in-tons-851c9),  [metadata](https://data.hawaii.gov/api/views/v48g-wbhi),  [data](https://data.hawaii.gov/api/views/v48g-wbhi/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/) |

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
| Links | [catalog](http://catalog.data.gov/dataset/math-and-reading-proficiency-by-school-year-public-school-district-and-grade-level), [attribution](http://itp.education.uiowa.edu/ia/AYPInformation.aspx), [metadata](https://data.iowa.gov/api/views/f3h8-mnxi),  [data](https://data.iowa.gov/api/views/f3h8-mnxi/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/) |

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
| Links | [catalog](http://catalog.data.gov/dataset/aaa-fuel-prices-52bf0), [attribution](http://hawaii.gov/dbedt),  [metadata](https://data.hawaii.gov/api/views/dqp6-3idi),  [data](https://data.hawaii.gov/api/views/dqp6-3idi/rows.json?accessType=DOWNLOAD),  [portal](https://apps.axibase.com/chartlab/) |

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
| Links | [catalog](http://catalog.data.gov/dataset/sales-and-use-tax-per-town-by-naics-2013-and-2014), [attribution](http://www.ct.gov/drs/cwp/view.asp?a=4128&q=483506), [metadata](https://data.ct.gov/api/views/rkm7-uwkb),  [data](https://data.ct.gov/api/views/rkm7-uwkb/rows.json?accessType=DOWNLOAD), [portal](https://apps.axibase.com/chartlab/) |

### Command

```ls
series e:rkm7-uwkb d:2014-01-01T00:00:00.000Z t:naics_industry_code="230 Construction" 
t:periods_ending="Quarter 1 - JAN to MAR" t:municipality="OUT OF COUNTRY " m:taxpayer_count=16 
m:retail_sales_of_goods=0 m:total_tax_due_at_7=0 m:total_tax_due_at_6_35=0
```

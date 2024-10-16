import React, { useState, useEffect, useRef } from "react";
import { Size } from "media-query";
import Brain from "Images/Brain.png";
import Dollar from "Images/Dollar.png";
import Health from "Images/Health.png";
import HDI2 from "Images/HDI3.png";
import Fade from "@mui/material/Fade";
import { Card } from "primereact/card";
import {
  cardbgcolor,
  textcolor,
  pagetitlecolor,
  cardtitlecolor,
  pagebgcolor,
  fontType,
} from "components/Display/feutures";

const HDI_groups_2 = () => {
  return (
    <div>
      <Card style={{ backgroundColor: cardbgcolor }} className="p-2 shadow-md">
        <div
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className=" text-center font-bold text-xl mb-1"
        >
          Why the American Human Development Index?
        </div>
        <div className="p-2 shadow-md">
          <p
            style={{ color: textcolor, fontFamily: fontType }}
            className="mb-2 text-left "
          >
            Dashboards and indexes that seek to capture and quantify concepts of
            well-being, mobility, inclusion, equity, prosperity, security, and
            sustainability are thick on the ground. What does the American Human
            Development Index add to New Jersey’s heavily populated data
            landscape? Several features make the HDI particularly useful for
            understanding and addressing inequities in Newark. • HDI scores are
            available by neighborhood and demographic group. Indicators and
            scores at the state or county level are useful for many purposes,
            but they fail to capture the often-stark differences between men and
            women, racial and ethnic groups, and cities and neighborhoods.
          </p>
          <p
            style={{ color: cardtitlecolor, fontFamily: fontType }}
            className="mb-2 text-left "
          >
            Looking only at Essex County data, for example, might lead us to
            assume that the countywide figure of 37.4 percent of adults age 25
            and older with at least a bachelor’s degree applies to Newark as
            well, when in fact the rate in Newark is less than half that, 16.7
            percent; adding gender and race/ ethnicity, we see that 55.4 percent
            of Asian women in Newark hold bachelor’s degrees—much higher than
            the county figure—compared to 9.3 percent of Newark’s Latino men. •
            The HDI directly measures inequality in a way that is easy to grasp
            and noncontroversial. The HDI synthesizes a complex reality into a
            single number that allows for easy comparisons between groups. The
            wide variation in HDI scores along its 10-point scale makes plain
            the extent of fundamental disparities among Newark residents. Many
            organizations today are seeking to apply an equity lens to their
            work; the HDI is such a lens.
          </p>
          <p
            style={{ color: cardtitlecolor, fontFamily: fontType }}
            className="mb-2 text-left "
          >
            The components that make up the index—living a long and healthy
            life, getting a good education, and earning a decent wage—are not
            controversial aims. They are universally valued, intuitively
            understood measures that, even in this age of extreme polarization,
            are widely accepted, and how these factors translate into human
            flourishing—or languishing— is readily understood. • It supplements
            money metrics with human metrics. An overreliance on economic
            metrics such as GDP can provide misleading information about the
            everyday conditions of ordinary people’s lives and the opportunities
            available to them. For example, using money as the sole gauge of
            well-being in Newark would lead us to conclude that white men, who
            earn the most ($50,600), have the best life outcomes. While that may
            be true economically, it is not true in terms of health.{" "}
          </p>
          <p
            style={{ color: cardtitlecolor, fontFamily: fontType }}
            className="mb-2 text-left "
          >
            Latina women, who earn less than half what white men do, can expect
            to live 84.0 years, 4.5 more than white men. Similarly, Asian Newark
            residents, who earn far less than white men, live 11.9 years longer.
            Nearly a dozen more years to walk the earth is an invaluable outcome
            that money metrics miss. • It rests on a robust framework developed
            by world-renowned scholars. The American HDI rests on a robust
            conceptual framework—the capabilities approach of Nobel laureate
            Amartya Sen—and is based on a road-tested international tool that is
            the global gold standard for measuring human well-being. Leading
            scholars from the social sciences, mathematics and statistics, and
            philosophy have engaged with and built upon human development
            concepts for decades, yielding a rich body of work in support of
            this powerful idea: the true measure of progress is the degree to
            which all people are able to imagine and attain the kind of life
            they value.
          </p>
          <p
            style={{ color: cardtitlecolor, fontFamily: fontType }}
            className="text-left "
          >
            The rich engagement of scholars from a range of disciplines from all
            corners of the earth in creating, exploring, researching, and
            building upon the HDI sets it apart from other well-being exercises.
            • The HDI connects different sectors to show problems, and their
            solutions, from a people-centered perspective. The cross-sectoral
            American HDI broadens the analysis of the interlocking factors that
            create or obstruct opportunities and fuel both advantage and
            disadvantage. It captures the key interrelated conditions that
            enable people to realize their full potential—or that hold them
            back.
          </p>
        </div>
      </Card>
    </div>
  );
};

const HDI_Groups = () => {
  return (
    <div>
      <Card style={{ backgroundColor: cardbgcolor }} className="p-2 shadow-md">
        <div
          style={{ color: cardtitlecolor }}
          className="text-center font-bold text-xl mb-1"
        >
          Why Don’t All Groups and Places Have an HDI Score?
        </div>
        <p
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className="mb-2 text-left "
        >
          You will notice that on some maps, specific areas appear in gray, and
          that in some tables, values for certain groups or locales are missing.
          Gray areas and missing values indicate that the data for that place or
          demographic group are not statistically reliable. Most of the cases of
          unreliability in this report stem from having a sample size that is
          too small to allow for statistically reliable calculations. “Rolling
          up” five years worth of data (2018–2022) increases reliability; using
          just the most recent year improves timeliness but makes it impossible
          to calculate rates for small populations.
        </p>
        <p
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className="mb-2 text-left "
        >
          It’s a trade-off, and we generally err on the side of granularity.
          Ideally, we would be able to provide scores not just for large
          demographic groups like Black and white Newark residents, but also for
          smaller ones, such as the long-settled Portuguese community in the
          Ironbound or the Puerto Rican community historically centered in Lower
          Broadway. Unfortunately, we cannot provide statistically stable scores
          for populations that fall below a certain population threshold.
          Combining several years of data gets us to this threshold for some
          groups, but not all. Another limitation in our ability to provide
          everyone an HDI score stems from the way in which the data we use for
          the index are collected.
        </p>
        <p
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className="mb-2 text-left "
        >
          We would like, for example, to calculate scores for LGBTQ residents,
          but are unable to do so because the American Community Survey does not
          provide a way for people to report information about their sexual and
          gender identities beyond marking the box for male or female. For
          similar reasons, calculating scores for specific populations that face
          disproportionate challenges, such as young adults aging out of the
          foster care system, people who are homeless, or people who have been
          incarcerated, is also impossible.
        </p>
        <p
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className="text-left "
        >
          We try to address these gaps by bringing in other data sources but
          understand that this is not ideal. In short, we can only calculate
          scores for groups that are given the chance to self-identify on the
          American Community Survey and that are sufficiently large as to allow
          reliable calculations. Right now, the survey only asks respondents to
          report their gender (just male or female), their race, if they are or
          are not Hispanic or Latino, if they are US or foreign born, their
          country of origin if they are foreign born, and the language they
          speak at home.
        </p>
      </Card>
    </div>
  );
};

const HDI_detail = () => {
  return (
    <div>
      <Card style={{ backgroundColor: cardbgcolor }} className="p-2 shadow-md">
        <p
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className="mb-2 text-left "
        >
          The three components are weighted equally on the premise that each is
          equally important for human well-being. In broad terms, the first
          steps for calculating the index are to compile or calculate the four
          indicators that constitute it: life expectancy, school enrollment,
          educational degree attainment, and median personal earnings. Because
          these indicators use different scales (years, dollars, percentages),
          they must be put on a common scale so that they can be combined.
        </p>
        <p
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className="mb-2 text-left "
        >
          Three subindexes, one for each of the three dimensions that make up
          the index—health, education, and earnings—are created on a scale of 0
          to 10. The process requires the selection of minimum and maximum
          values—or “goalposts”—for each of the four indicators. These goalposts
          are determined based on the range of the indicator observed from the
          data and also taking into account possible increases and decreases in
          years to come. For life expectancy, for example, the goalposts are 90
          years at the high end and 66 years at the low end.
        </p>
        <p
          style={{ color: cardtitlecolor, fontFamily: fontType }}
          className="text-left "
        >
          The three subindexes are then added together and divided by three to
          yield the American Human Development Index value. (A more detailed
          technical description can be found in the Methodological Note). In
          this report and others, the index score is presented for the whole
          population—the score for Newark is 4.10 out of 10—as well as for
          different slices of the population. For this report, index scores are
          presented by demographic group and by place. The pages that follow
          present the results of the overall HDI; explore in greater detail the
          constituent parts of the HDI, namely health, education, and earnings;
          explore youth well-being; and make recommendations for how to increase
          the HDI scores for everyone, particularly for the groups with the
          lowest scores.
        </p>
      </Card>
    </div>
  );
};

const HDI = () => {
  const size = Size();
  return (
    <Fade in={true} timeout={1400}>
      {size === "MD" || size === "SM" || size === "XS" || size === "L" ? (
        <div>
          <Card
            style={{ backgroundColor: cardbgcolor }}
            className="p-2 shadow-md"
          >
            <p
              style={{ color: cardtitlecolor, fontFamily: fontType }}
              className="text-left my-auto flex mb-2"
            >
              A Long and Healthy Life is measured using life expectancy at
              birth. Measure of South Africa calculates life expectancy using
              mortality data from the South African Department of Health and
              population data from Statistics South Africa. For estimates of the
              overall population in urban areas like Johannesburg and for all
              gender, nativity, and race/ethnicity combinations, we used
              mortality data from 2017 to 2021 provided by the Department of
              Health. For specific geographic areas, we relied on life
              expectancy estimates from the South African Medical Research
              Council.
            </p>
            <p
              style={{ color: cardtitlecolor, fontFamily: fontType }}
              className="text-left my-auto flex mb-2"
            >
              Access to Knowledge is measured using two indicators: school
              enrollment for the population aged 3 to 24 years and educational
              degree attainment for those aged 25 and older. A one-third weight
              is applied to the enrollment indicator and a two-thirds weight to
              the degree attainment indicator to reflect the relative importance
              of earning qualifications compared to attending school. Both
              indicators are sourced from the Statistics South Africa General
              Household Survey and the National Learner Record Database for the
              relevant years.
            </p>
            <p
              style={{ color: cardtitlecolor, fontFamily: fontType }}
              className="text-left my-auto flex "
            >
              A Decent Standard of Living is measured using median earnings of
              all full- and part-time workers aged 15 and older, based on data
              from the Statistics South Africa Quarterly Labour Force Survey for
              the relevant years.
            </p>
          </Card>
        </div>
      ) : (
        <div className="grid grid-flow-col gap-2">
          <Card
            style={{
              color: cardtitlecolor,
              fontFamily: fontType,
              backgroundColor: cardbgcolor,
            }}
            header={
              <div className="rounded-md p-2 max-w-sm mx-auto">
                <img className="rounded" src={Health} />
              </div>
            }
            subTitle={
              <div className="text-xl text-gray-light">
                A Long and Healthy Life
              </div>
            }
          >
            <p className="text-left my-auto">
              A Long and Healthy Life is measured using life expectancy at
              birth. Measure of South Africa calculates life expectancy using
              mortality data from the South African Department of Health and
              population data from Statistics South Africa. For estimates of the
              overall population in urban areas like Johannesburg and for all
              gender, nativity, and race/ethnicity combinations, we used
              mortality data from 2017 to 2021 provided by the Department of
              Health. For specific geographic areas, we relied on life
              expectancy estimates from the South African Medical Research
              Council.
            </p>
          </Card>
          <Card
            style={{
              color: cardtitlecolor,
              fontFamily: fontType,
              backgroundColor: cardbgcolor,
            }}
            header={
              <div className="rounded-md p-2 max-w-sm mx-auto">
                <img className="rounded" src={Brain} />
              </div>
            }
            subTitle={
              <div className="text-xl text-gray-light">Access to Knowledge</div>
            }
          >
            <p className="text-left my-auto">
              Access to Knowledge is measured using two indicators: school
              enrollment for the population aged 3 to 24 years and educational
              degree attainment for those aged 25 and older. A one-third weight
              is applied to the enrollment indicator and a two-thirds weight to
              the degree attainment indicator to reflect the relative importance
              of earning qualifications compared to attending school. Both
              indicators are sourced from the Statistics South Africa General
              Household Survey and the National Learner Record Database for the
              relevant years.
            </p>
          </Card>
          <Card
            style={{
              color: cardtitlecolor,
              fontFamily: fontType,
              backgroundColor: cardbgcolor,
            }}
            header={
              <div className="p-2 max-w-sm mx-auto">
                <img className="rounded" src={Dollar} />
              </div>
            }
            subTitle={
              <div className="text-xl text-gray-light">
                A Decent Standard of Living
              </div>
            }
          >
            <p className="text-left my-auto">
              A Decent Standard of Living is measured using median earnings of
              all full- and part-time workers aged 15 and older, based on data
              from the Statistics South Africa Quarterly Labour Force Survey for
              the relevant years.
            </p>
          </Card>
        </div>
      )}
    </Fade>
  );
};

export const QOL = () => {
  const size = Size();

  const Reg = () => {
    return (
      <div>
        <Fade in={true} timeout={1000}>
          {size === "MD" || size === "SM" || size === "XS" || size === "L" ? (
            <div
              style={{ backgroundColor: cardbgcolor }}
              className="p-2 shadow-md"
            >
              <Card style={{ backgroundColor: cardbgcolor }}>
                <p
                  style={{ color: cardtitlecolor, fontFamily: fontType }}
                  className="mb-2 text-left p-2"
                >
                  Trying to measure all the facets of the expansive concepts of
                  human development would be madness. Thus, the United Nations
                  Human Development Index, along with the adapted South African
                  Human Development Index featured in this report, measures just
                  three fundamental capabilities: a long and healthy life,
                  access to knowledge, and a decent standard of living (see
                  FIGURE 1). Why only three areas, and why these three in
                  particular? People around the world, including in South
                  Africa, view them as core building blocks of a life of value,
                  freedom, and dignity.
                </p>
                <p
                  style={{ color: cardtitlecolor, fontFamily: fontType }}
                  className="mb-2 text-left  p-2"
                >
                  Healthy lives, quality education, and decent wages are not
                  controversial aims. Moreover, these foundational capabilities
                  enable other capabilities, such as adequate housing in safe
                  communities. They are also essential to human security. From a
                  practical perspective, these are areas that can be measured
                  comparatively easily with reliable and regularly collected
                  proxy indicators. It is tempting to include indicators of
                  various important capabilities—such as affordable housing,
                  food security, and political participation—in a well-being
                  index. However, indexes with a large number of indicators can
                  be complex.
                </p>
                <p
                  style={{ color: cardtitlecolor, fontFamily: fontType }}
                  className="mb-2 text-left p-2"
                >
                  Using many indicators can lead to counting the same phenomenon
                  multiple times, resulting in confusing outcomes and a false
                  equivalence between fundamental and derivative issues. For
                  example, a housing indicator may overlap significantly with an
                  earnings indicator—reflecting how much money a person has to
                  pay for life’s essentials. Indexes that include a large number
                  of indicators can be difficult to explain and understand,
                  diluting their advocacy power. Additionally, including
                  numerous indicators can limit the areas and demographic groups
                  for which unique scores can be calculated.
                </p>
                <p
                  style={{ color: cardtitlecolor, fontFamily: fontType }}
                  className="text-left p-2"
                >
                  It is crucial, however, to be realistic about the limitations
                  of a streamlined index like this one. The South African Human
                  Development Index is not the end of a discussion on
                  well-being; it is just the beginning. Once disparities in
                  basic outcomes have been identified using the index and its
                  components, the critical task is to explore the underlying
                  reasons—such as power disparities, historical contexts, past
                  and present policy choices, and more—that have resulted in
                  different outcomes for various groups of people. For this
                  exploration, a broad range of other indicators is
                  required—indicators that are discussed throughout the report.
                </p>
                <div className="flex align-center justify-center">
                  <img className="rounded-md mt-2" src={HDI2} />
                </div>
              </Card>
            </div>
          ) : (
            <div>
              <Card style={{ backgroundColor: cardbgcolor }}>
                <div className="grid grid-flow-col gap-2">
                  <div>
                    <p
                      style={{ color: cardtitlecolor, fontFamily: fontType }}
                      className="mb-2 text-left p-2"
                    >
                      Trying to measure all the facets of the expansive concepts
                      of human development would be madness. Thus, the United
                      Nations Human Development Index, along with the adapted
                      South African Human Development Index featured in this
                      report, measures just three fundamental capabilities: a
                      long and healthy life, access to knowledge, and a decent
                      standard of living (see FIGURE 1). Why only three areas,
                      and why these three in particular? People around the
                      world, including in South Africa, view them as core
                      building blocks of a life of value, freedom, and dignity.
                    </p>
                    <p
                      style={{ color: cardtitlecolor, fontFamily: fontType }}
                      className="mb-2 text-left  p-2"
                    >
                      Healthy lives, quality education, and decent wages are not
                      controversial aims. Moreover, these foundational
                      capabilities enable other capabilities, such as adequate
                      housing in safe communities. They are also essential to
                      human security. From a practical perspective, these are
                      areas that can be measured comparatively easily with
                      reliable and regularly collected proxy indicators. It is
                      tempting to include indicators of various important
                      capabilities—such as affordable housing, food security,
                      and political participation—in a well-being index.
                      However, indexes with a large number of indicators can be
                      complex.
                    </p>
                    <p
                      style={{ color: cardtitlecolor, fontFamily: fontType }}
                      className="mb-2 text-left p-2"
                    >
                      Using many indicators can lead to counting the same
                      phenomenon multiple times, resulting in confusing outcomes
                      and a false equivalence between fundamental and derivative
                      issues. For example, a housing indicator may overlap
                      significantly with an earnings indicator—reflecting how
                      much money a person has to pay for life’s essentials.
                      Indexes that include a large number of indicators can be
                      difficult to explain and understand, diluting their
                      advocacy power. Additionally, including numerous
                      indicators can limit the areas and demographic groups for
                      which unique scores can be calculated.
                    </p>
                    <p
                      style={{ color: cardtitlecolor, fontFamily: fontType }}
                      className="text-left p-2"
                    >
                      It is crucial, however, to be realistic about the
                      limitations of a streamlined index like this one. The
                      South African Human Development Index is not the end of a
                      discussion on well-being; it is just the beginning. Once
                      disparities in basic outcomes have been identified using
                      the index and its components, the critical task is to
                      explore the underlying reasons—such as power disparities,
                      historical contexts, past and present policy choices, and
                      more—that have resulted in different outcomes for various
                      groups of people. For this exploration, a broad range of
                      other indicators is required—indicators that are discussed
                      throughout the report.
                    </p>
                  </div>
                  <div className="flex align-center justify-center">
                    <img className="rounded-md mt-2" src={HDI2} />
                  </div>
                </div>
              </Card>
            </div>
          )}
        </Fade>
      </div>
    );
  };

  return (
    <div cclassName="block h-auto" style={{ backgroundColor: pagebgcolor }}>
      <Fade in={true} timeout={1000}>
        <h1
          style={{ color: pagetitlecolor, fontFamily: fontType }}
          className="p-2  text-center justify-center font-bold text-3xl mt-16"
        >
          Quality Of Life
        </h1>
      </Fade>
      <div className="rounded-t-md mb-2 mx-2">
        <Reg />
      </div>
      <div className="rounded-t-md mb-2 mx-2">
        <HDI />
      </div>
      <div className="rounded-t-md mb-2 mx-2">
        <HDI_detail />
      </div>
      <div className="rounded-t-md mb-2 mx-2">
        <HDI_Groups />
      </div>
      <div className="rounded-t-md mb-2 mx-2">
        <HDI_groups_2 />
      </div>
    </div>
  );
};

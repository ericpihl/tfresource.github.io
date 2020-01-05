(window.webpackJsonp=window.webpackJsonp||[]).push([[338],{81:function(e,t,o){"use strict";o.r(t);var i=o(0),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"introduction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),o("p",[e._v("Vehicle ownership is an important determinant of travel demand and vehicular travel. Vehicular travel has key implications for congestion, energy and environmental impacts of household travel, and safety. For this reason, many travel demand models include a specific vehicle ownership model component recognizing the endogenous nature of this choice phenomenon. Vehicle ownership is often viewed as a household level choice with subsequent impacts on personal and household activity-travel patterns. When households have fewer vehicles than licensed drivers or workers in a household, then vehicles may need to be shared or allocated among individuals – thus contributing to intra-household interactions that also influence activity-travel patterns. Vehicle ownership models take a variety of forms and there is a vast body of literature dedicated to the topic. A major distinction may be drawn between vehicle holdings models that capture vehicle ownership at a point in time and dynamic models of vehicle ownership that capture the transactions involved in the evolution of household vehicle fleets over time. Figure 1 shows a basic distinction between these two families of models. This page offers a summary of some vehicle ownership and evolution models that appear in research and practice.")]),e._v(" "),o("p",[o("a",{attrs:{href:"File_VehicleHoldingsTransactionsFramework_deJongKitamura_gif"}},[e._v("framed|none|400px|Figure 1. Vehicle Holdings vs Vehicle Transactions Models (Source: de Jong and Kitamura, 2009)")])]),e._v(" "),o("h2",{attrs:{id:"modeling-number-of-vehicles-owned-vehicle-holdings-models"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modeling-number-of-vehicles-owned-vehicle-holdings-models"}},[e._v("#")]),e._v(" Modeling Number of Vehicles Owned (Vehicle Holdings Models)")]),e._v(" "),o("p",[e._v("Many vehicle ownership models in practice (in both four-step and activity-based travel demand models) are essentially models of vehicle counts with a view to determine the number of vehicles owned by households in a region. Because vehicle ownership takes the form of discrete numbers, linear regression is not a suitable method to model vehicle ownership. Vehicle ownership models have often taken the form of count models (Poisson or Negative Binomial regression models) or discrete choice models (multinomial logit or ordered probit models). Discrete choice models of vehicle ownership are used more commonly in practice.")]),e._v(" "),o("p",[o("strong",[e._v("Count Models:")]),e._v(" Poisson and Negative Binomial regression models are the most common forms of count models used to model vehicle ownership. The poisson model is generally applicable for situations when the mean and variance of the dependent variable of interest are equal to one another. Because this is rarely the case in transport modeling, the negative binomial regression model is generally more applicable to model count variables. The negative binomial regression model accommodates differences between variance and mean of the dependent variable arising from under- or over-dispersion in the data.")]),e._v(" "),o("p",[o("strong",[e._v("Multinomial Logit Model:")]),e._v(" The multinomial logit model (MNL) is the most common discrete choice model used in transport modeling. It is generally used to model unordered discrete choice phenomena such as mode choice. Each alternative of the choice set is assigned a utility function, which is usually a linear function of socio-economic variables that describe the household together with built environment and network accessibility variables. Alternatives in the choice set may, for example, be “zero vehicles”, “one vehicle”, “two vehicles”, “three vehicles”, “more than three vehicles”. Although the MNL model is used often, it may not be the preferred approach due to the ordered nature of the choice variable. Moreover, the IIA property may prove to be a limitation due to the possible presence of unobserved but correlated attributes that affect choice of different alternatives in the choice set.")]),e._v(" "),o("p",[o("strong",[e._v("Ordered Probit Model:")]),e._v(" The ordered probit model (OP) is very commonly used to model dependent variables that have an inherent order to their definition. Vehicle ownership is one such variable, and hence the ordered probit is a popular technique to model this household choice. The ordered probit model assumes that there is an underlying latent continuous variable that is normally distributed and represents the latent propensity to fall into different vehicle ownership levels. Model estimation involves estimation of coefficients associated with different explanatory variables as well as threshold values that define the region of the latent continuous distribution corresponding to different vehicle ownership levels.")]),e._v(" "),o("h2",{attrs:{id:"dynamic-models-of-vehicle-ownership"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-models-of-vehicle-ownership"}},[e._v("#")]),e._v(" Dynamic Models of Vehicle Ownership")]),e._v(" "),o("p",[e._v("Although many models in practice treat vehicle ownership as a static choice phenomenon, there is considerable recognition that vehicle ownership at any point in time is the result of transactions that are undertaken over time. Households acquire vehicles, replace and/or trade vehicles, and dispose vehicles over time. Modeling the dynamics of vehicle ownership through the explicit recognition of transactions has been of much interest, particularly in the research arena. Lack of data about vehicle transactions over time has hindered the ability to implement such models in practice. Alternative methods and frameworks have been adopted to model vehicle transactions.")]),e._v(" "),o("p",[e._v("Vehicle transactions models purport to represent the evolution of a household’s vehicle fleet over time as vehicles get replaced, traded, disposed, or acquired at different points in time. These decisions may be triggered by aging of vehicle stock, changes in vehicle attributes in the marketplace, socio-economic or demographic changes, land use changes, or modal network accessibility changes.")]),e._v(" "),o("p",[o("strong",[e._v("Hazard-based duration models")]),e._v(" have been used to represent vehicle transactions behavior. Hazard-based duration models, which take several forms depending on the specification, capture the duration of a choice phenomenon of interest before an event happens. In the case of vehicle transactions, it may represent the time that a vehicle is held (survives) in the household’s fleet before it is disposed or replaced. Alternatively, it may represent the time that a household remains in a certain state of vehicle ownership before deciding to acquire another vehicle. Hazard-based duration models attempt to predict the timing of change in vehicle ownership level and the nature of the transaction event. (Rashidi and Mohammadian, 2011; Yamamoto et al, 2004; Yamamoto et al, 1999).")]),e._v(" "),o("p",[o("strong",[e._v("Dynamic discrete choice models (DDCM)")]),e._v(" are being proposed in the literature to capture the dynamics of human behavior in the context of discrete choices (Liu and Cirillo, 2017). Recognizing that many behavioral phenomena play out over time, dynamic discrete choice models aim to model the optimal timing of an event considering the payoff or utility that an individual will derive from engaging in a transaction. In DDCM approaches, traditional discrete choice model formulations are combined with dynamic programming or other optimization methods to solve for the optimal timing of an event or a transaction that would maximize a utility function. Recent developments in this arena involve not only modeling the optimal purchase time but also consumer’s choice of the type of vehicle in the marketplace. DDCM aim to explicitly represent the forward-looking perspective of the consumer who is assessing the evolution of the marketplace in terms of options and prices (Cirillo et al, 2015).")]),e._v(" "),o("p",[o("strong",[e._v("Vehicle transition probability models")]),e._v(" involve modeling the change in state from one point in time to the next. A household may own a certain number of vehicles at time t and then change to a different state or stay in the same state of vehicle ownership in time point t+1. Over time, households may transition to a state of higher vehicle ownership or lower vehicle ownership, or may remain in the same state of vehicle ownership. Thus, the focus is not necessarily on transactions as a vehicle replacement or trade may result in the same vehicle ownership state from one time point to the next (albeit with a different mix of vehicles in the fleet). Probabilities of households transitioning (or not) from one state to another are modeled as a function of (changes in) vehicle attributes, socio-economic and demographic attributes, and built environment and network accessibility variables. Transition probability matrices can be constructed based on the possible transactions that may occur from one time period to the next. If the period is short enough, then it is reasonable to simplify the problem and assume that only one transaction can take place within each period (de Jong and Kitamura, 2009).")]),e._v(" "),o("p",[o("strong",[e._v("Vehicle evolution models")]),e._v(" treat the dynamics of vehicle ownership as a “choice occasion” problem. In this framework, a household is assumed to make choices related to the acquisition, disposal, or replacement of each vehicle in the fleet at each “occasion”. The evolutionary model starts with an assumption on the number of possible choice occasions; for example, this may be set as the “number of adults + 2” because households virtually never own more than two vehicles beyond the number of adults in the household. If a household has two adults, then there could be four choice occasions. In each choice occasion, a household may acquire a net additional vehicle, replace/trade an existing vehicle, or dispose (and not replace) an existing vehicle. The model then moves to the next time step and the choices associated with each “occasion” are modeled to determine the vehicle ownership in the subsequent time step. A discrete choice model such as a multinomial logit model may be used to represent the choices exercised on each occasion.")]),e._v(" "),o("h2",{attrs:{id:"vehicle-fleet-composition-models"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#vehicle-fleet-composition-models"}},[e._v("#")]),e._v(" Vehicle Fleet Composition Models")]),e._v(" "),o("p",[e._v("Due to energy and environmental sustainability concerns, transportation modelers and planners are increasingly modeling the mix of vehicle types owned and operated by households. It is not necessarily sufficient to know the number of vehicles owned by a household at any point in time, but is also necessary to determine the mix of vehicle types in the household fleet to better address energy and environmental sustainability goals. Not only is there an interest in identifying the types of vehicles owned by households, but it is also of interest to model the extent (distance) to which each vehicle in the fleet is used because it is ultimately vehicle miles of travel (vehicle usage patterns) that determine energy and air quality outcomes.")]),e._v(" "),o("p",[e._v("Vehicle fleet composition modeling recognizes that households may own a number of different vehicles that vary in terms of their characteristics. For example, households may own a mix of vehicle types defined by age, body type, and fuel type. Not only do households own a mix of different vehicle types, but they also use each of the vehicles in the fleet to a different extent. Thus, modeling vehicle fleet composition may be viewed as a multiple discrete-continuous problem with households choosing multiple discrete alternatives from the choice set of vehicle alternatives and then using them to different extents. The amount that each vehicle is used or driven constitutes a continuous choice dimension and is often represented by the mileage accrued on each vehicle. For this reason, the "),o("a",{attrs:{href:"Multiple_Discrete_Continuous_Extreme_Value_MDCEV"}},[e._v("Multiple Discrete-Continuous Extreme Value (MDCEV) Model")]),e._v("_Model) has been used to model vehicle fleet composition (and ownership) in a single unified framework (Bhat and Sen, 2006). The MDCEV model utilizes a utility formulation that accounts for satiation effects (diminishing marginal utility) and accommodates corner solutions (some alternatives may not be consumed or chosen at all) (Bhat, 2008). By invoking the MDCEV model, it is possible to simultaneously determine the number of vehicles owned, the types of vehicles owned, and the mileage accrued for each vehicle.")]),e._v(" "),o("p",[e._v("Vehicle fleet composition models are being integrated selectively with dynamic models of vehicle ownership. For example, Liu and Cirillo (2017) extend the dynamic discrete choice modeling framework to account for future vehicle type choice. Similarly, the vehicle evolution modeling framework has been extended to account for vehicle type choice associated with each choice occasion. Figure 2 shows an example of a vehicle fleet composition and evolution model where an MDCEV model of vehicle fleet composition in the base year is coupled with a choice-occasion based vehicle evolution model (Paleti et al, 2011).")]),e._v(" "),o("p",[o("img",{attrs:{src:"vehicleevolutionframework.jpg",alt:"Figure 2. Vehicle Fleet Composition and Evolution Model System (Source: Paleti et al, 2011)",title:"Figure 2. Vehicle Fleet Composition and Evolution Model System (Source: Paleti et al, 2011)"}})]),e._v(" "),o("p",[e._v("\\")]),e._v(" "),o("h2",{attrs:{id:"market-segmentation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#market-segmentation"}},[e._v("#")]),e._v(" Market Segmentation")]),e._v(" "),o("p",[e._v("The inclusion of socio-economic and demographic attributes in a choice model specification should help account for observed heterogeneity in vehicle ownership behavior. In some contexts, it may be desired to account for structural differences in behavioral relationships that drive vehicle ownership choices. In such cases, market segmentation approaches may be invoked to account for heterogeneity in the population. If it is believed that simply including socio-economic variables as explanatory variables in the choice model is insufficient in accounting for population heterogeneity, then separate vehicle ownership models may be estimated for different market segments. Market segments may be defined by income, age group, residential location, or household composition and lifestyle variables. For example separate models may be estimated for single person households versus households with children; or households residing in the central city (with access to transit and many destination opportunities within walking distance) versus households in suburban locations. Another method for accounting for population heterogeneity is the use of mixed logit models where model parameters are assumed to be random themselves following an assumed distribution (example, normal distribution). The use of random parameters accounts for differential sensitivity of individuals to explanatory variables.")]),e._v(" "),o("h2",{attrs:{id:"model-calibration-and-validation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#model-calibration-and-validation"}},[e._v("#")]),e._v(" Model Calibration and Validation")]),e._v(" "),o("p",[e._v("Vehicle ownership models should be subjected to model calibration and validation exercises as with any other model components. Modelers may subject the models to sample replication exercises. In such exercises, the estimated model is applied to the estimation sample to see if the model is able to replicate patterns of choices exhibited by the estimation sample itself. If the replication of the distribution of vehicle ownership in the sample is unsatisfactory, then model constants may be adjusted and the specification of the model may be enhanced to obtain a satisfactory sample replication. It is advisable to perform these checks for different market segments of interest (e.g., low, medium, and high income). If the survey sample available for model estimation is large enough, then the sample may be partitioned into an estimation sample (about 70-80%) and a holdout validation sample (20-30%). The estimated model may be applied to the holdout sample to see if the model is able to offer satisfactory predictions of the distribution of vehicle ownership patterns in the holdout sample. Adjustments to model specification and constants may help improve predictive accuracy if necessary. In addition, the model should be subjected to a variety of sensitivity tests and applied to a variety of scenarios to see if the model offers reasonable predictions (sensitivity) in response to changes in system conditions or socio-economic characteristics. Finally, state Motor Vehicle Divisions may be willing to offer statistics or databases about population wide vehicle registrations; summaries of vehicle registrations at zip code level or similar geographic aggregation may be compared against model predictions to determine the efficacy of the vehicle ownership and/or fleet composition model. In general, a well validated model would be able to predict the distributions of vehicles by count and/or by type within an acceptable degree of tolerance (to be set by the analyst based on context and nature of application). The Model Validation and Reasonableness Checking Manual describes methods for model validation and offers guidance on criteria that may be used as a basis for determining the reasonableness of models.")]),e._v(" "),o("p",[o("br"),e._v("\n=References=")]),e._v(" "),o("p",[e._v("Bhat, C.R. and S. Sen (2006) Household vehicle type holdings and usage: an application of the multiple discrete-continuous extreme value (MDCEV) model. Transportation Research Part B, 40(1), pp. 35-53. "),o("a",{attrs:{href:"http://www.sciencedirect.com/science/article/pii/S0191261505000093",target:"_blank",rel:"noopener noreferrer"}},[e._v("1"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Bhat, C.R. (2008) The multiple discrete-continuous extreme value (MDCEV) model: role of utility function parameters, identification considerations, and model extensions. Transportation Research Part B, 42(3), pp. 274-303. "),o("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/S0191261507000677",target:"_blank",rel:"noopener noreferrer"}},[e._v("2"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Cirillo, C., R. Xu, and F. Bastin (2015) A dynamic formulation for car ownership modeling. Transportation Science 50(1), pp. 322-335. "),o("a",{attrs:{href:"https://pubsonline.informs.org/doi/abs/10.1287/trsc.2015.0597",target:"_blank",rel:"noopener noreferrer"}},[e._v("3"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("de Jong, G.C. and R. Kitamura (2009) A review of household dynamic vehicle ownership models: holdings models versus transactions models. Transportation 36(6), pp. 733-743. "),o("a",{attrs:{href:"https://link.springer.com/article/10.1007/s11116-009-9243-7",target:"_blank",rel:"noopener noreferrer"}},[e._v("4"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Liu, Y. and C. Cirillo (2017) A generalized dynamic discrete choice model for green vehicle adoption. Transportation Research Procedia 23, pp. 868-886. "),o("a",{attrs:{href:"http://www.sciencedirect.com/science/article/pii/S2352146517303265",target:"_blank",rel:"noopener noreferrer"}},[e._v("5"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Paleti, R., N. Eluru, C.R. Bhat, R.M. Pendyala, T.J. Adler, and K.G. Goulias (2011) The Design of a Comprehensive Microsimulator of Household Vehicle Fleet Composition, Utilization, and Evolution. Transportation Research Record 2254, Journal of the Transportation Research Board, pp. 44-57. "),o("a",{attrs:{href:"http://trrjournalonline.trb.org/doi/abs/10.3141/2254-06",target:"_blank",rel:"noopener noreferrer"}},[e._v("6"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Rashidi, T. and A. Mohammadian (2011) A competing hazard model of household vehicle transaction behavior with discrete time intervals and unobserved heterogeneity. Transportation Letters 3(3), pp. 219-229. "),o("a",{attrs:{href:"http://www.tandfonline.com/doi/abs/10.3328/TL.2011.03.03.219-229?journalCode=ytrl20",target:"_blank",rel:"noopener noreferrer"}},[e._v("7"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Yamamoto, T., J. Madre, and R. Kitamura (2004) An analysis of the effects of French vehicle inspection program and grant for scrappage on household vehicle transaction. Transportation Research Part B 38, pp. 905-926. "),o("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/S0191261504000086",target:"_blank",rel:"noopener noreferrer"}},[e._v("8"),o("OutboundLink")],1)]),e._v(" "),o("p",[e._v("Yamamoto, T., R. Kitamura, and S. Kimura (1999) Competing-Risks-Duration Model of Household Vehicle Transactions with Indicators of Changes in Explanatory Variables. Transportation Research Record 1676, Journal of the Transportation Research Board, pp. 116-123. "),o("a",{attrs:{href:"http://trrjournalonline.trb.org/doi/abs/10.3141/1676-15",target:"_blank",rel:"noopener noreferrer"}},[e._v("9"),o("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=a.exports}}]);
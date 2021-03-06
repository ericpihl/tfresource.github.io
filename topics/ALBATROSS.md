---
title: 'ALBATROSS'
categories:
  - Activity Based Models
---

## Introduction

Albatross, acronym for A Learning Based Transportation Oriented Simulation System, was developed for the Dutch Ministry of Transportation, who decided to develop an activity-based model alongside their state-of-the-art tour- based model LMS. Albatross uses a sequential decision process to generate daily activity schedules of individuals in the context of a household. A "decision tree" is the formalism to do that. Generated activity schedules describe for a given day which activities are conducted, when (start time), for how long (duration), where (location), with whom, and, if travelling is involved, the transport mode used and chaining of trips.

Albatross consists of various components that perform specialized functions in the scheduling and schedule execution process. Figure below portrays the different parts of system.

![Architecture](Architcture_of_system.JPG 'Architecture of system')

_Architecture of Albatross_

### 1.The Scheduling Engine

The core component of the system is the Scheduling Engine.Various moments in the process require decisions and information about options and conditions for decisions. The scheduling Engine identifies which condition information is relevant for the Decision Unit, activates the appropriate analytical and rule-based models in the Inference System to obtain the information, and translates decisions returned by the Decision Unit to appropriate operations on the evolving schedule. The scheduling engine uses functional specification of both Inference System and the Decision Unit but doesn’t need to know how inference and decision functions are defined. .
Albatross uses a priority-based scheduling process where mandatory activities are scheduled first and discretionary activities are scheduled next. Furthermore, timing and trip-chaining decisions have priority over location decisions and location decisions in turn have priority over transport mode decisions.

### 2.The Decision Unit

An inference engine, selects and applies the appropriate rules to arrive at a decision upon a query of Scheduling Engine is built-in.The rules connecting condition variables and decision options are external to the system and loaded from data files. This means that users have the possibility to use application-dependent rule-bases. Learning mechanism derive rules from data based on the principle of inductive learning. Finally decision rules are the output of this decision unit implying how people make decision under specific circumstance.

### 3.Inference System

Inference System consists of a collection of built-in analytical and logic-based models representing basic knowledge about scheduling constraints. It is a fix part of the system and does not vary across individuals or environment (unlike the decision rules).

### 4.Data Set

The data includes two layer. First layer has scheduled schedule during the previous steps of processing which will be used as input for the successive decisions. Onother set of data is static constraints that could be choice sets or time range. and the last item of the first layer is observed se to determine goodness of fit.
The second layer includes information about the study area in terms of attributes of populations of households, the land use patterns and transportation system. The land use system is described in terms of opening hours, number of employees in different activities in different locations. Transport system includes distance and travel time

---

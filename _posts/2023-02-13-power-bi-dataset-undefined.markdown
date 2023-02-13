---
layout: post
title:  "powerbi 'unable to connect to data source undefined' 😡"
date:   2023-02-13 19:30
category: article
---

This one took me fucking ages to work out mid-2022, and it nearly stung me again today while I was supposed to be on annual leave.

PowerBI is actually toxic to work with. Vague errors, vague documentation, and public forum support with self-proclaimed "gurus" closing issues while being confidently incorrect. So basically ChatGPT.

Anyway...

## [the situation](https://assets2.cbsnewsstatic.com/hub/i/r/2010/08/23/9830c0e1-a642-11e2-a3f0-029118418759/thumbnail/620x465/ee89b67239d2e9690697a94e6efb614d/situation_sorrent_abs_424.jpg)

> hey Tom, none of the PowerBI dashboards are refreshing

Analysts were panicking as disgruntled stakeholders were coming into poorly made cups of tea and out of date data.

When the 7:30-9:00 staggered dataset refreshes had started they had all failed one by one with the following error:

![A very generic error message from PowerBI, "Something went wrong - unable to connect to the data source undefined"](https://www.tomwillgoto.space/static/images/IMG_1480.jpg)

Needless to say, this is a pretty terrible error message, and [it](https://community.powerbi.com/t5/Service/Unable-to-connect-to-data-source-undefined/td-p/607443) [has](https://stackoverflow.com/questions/56584183/power-bi-unable-to-connect-to-the-data-source-undefined) [many](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem-tshoot) [meanings](https://www.reddit.com/r/PowerBI/comments/jzltcw/refresh_error_unable_to_connect_to_the_data/).

This post is just throwing *yet another* meaning to this error message, I'm afraid.

## investigation 🕵️

Our organisation, and many like us I assume, use the following configuration for our PowerBI reporting:

Data Warehouse -> Reporting Layer -> [PowerBI On-premises data gateway](https://learn.microsoft.com/en-us/power-bi/connect-data/service-gateway-onprem) -> PowerBI.com

So, it only made sense to troubleshoot in the order of the report generation stages.

After ruling out issues with our ETL, checking the change log on Friday to make sure IT hadn't made any breaking changes, and using the Gateway setup page on PowerBI.com to test the gateway was reporting as online, I fired up our gateway server.

## lesson one - you need more service accounts

The PowerBI on-premise data gateway needs to be signed in with a Microsoft account, which has a PowerBI License and enough access to manage gateways.

It turns out my line manager had used his personal work account to originally set this up, and the data gateway manager requires regular authentication to manage settings, or even debug. This meant that I had to sign into the application as well, set up a *new* gateway, and create a database connection on PowerBI.com to troubleshoot.

For the record -- this *does not* impact your existing gateway; however it makes sense to create or use an existing service account, give it a PowerBI license, and use it to manage the gateway. In case of the [bus factor](https://en.wikipedia.org/wiki/Bus_factor).

## a needle in a haystack

Once signed in, I ensured I could reproduce the issue and attempted a manual refresh of a dataset linked up to this new gateway.

Now that was done, I could generate a zip file of the gateways logs using the client. The file nomenclature in the produced zip is straightforward, look for "error" and the ISO8601 representation of the date.

Within this file, laid the culprit--SSL certificates.

We've had this problem a few times on two different installs of SQL Server, 2008 R2 and 2019 Standard.

To fix this, launch the  SQL Server Configuration Manager from your SQL Server instance and expand SQL Server Network Configuration.

Right-click **Protocols for** `instance name`, and then select **Properties**.

Choose the **Certificate** tab.

In my case, the valid certificate had just been deselected, so reselecting the valid certificate (you can check which one is valid if they share names by clicking "Details") did the trick, but you can also import a certificate from this window.

Finally, **restart the SQL Server service**.

## and that's how i got a day off back in lieu

I hate PowerBI, and it wasn't even PowerBI's fault. I hope this helps someone, or maybe me in the future, because this counts as documentation(?).


$(document).ready(function () {
  // Toggle menu on click
  $("#menu-toggler").click(function () {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }
});


      var chartData = [
        { visitor: 18, visit: "Baseball" },
        { visitor: 22, visit: "Basketball" },
        { visitor: 12, visit: "Football" },
        { visitor: 20, visit: "Hockey" },
        { visitor: 45, visit: "Soccer" },
      ];

      var visitorData = [],
        visitData = [];

      for (var i = 0; i < chartData.length; i++) {
        visitorData.push(chartData[i]["visitor"]);
        visitData.push(chartData[i]["visit"]);
      }

      var piechart = new Chart(document.querySelectorAll(".piecharts"), {
        type: "pie",
        data: {
          labels: visitData,
          datasets: [
            {
              label: "Visitor",
              data: visitorData,
              backgroundColor: [
                "#005C00",
                "#008904",
                "#B9F5D8",
                "#D9FFF5",
                "#7494EA",
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          legend: false,
          segmentShowStroke: false,
          legendCallback: function (chart) {
            var legendHtml = [];
            legendHtml.push("<ul>");
            var item = chart.data.datasets[0];
            for (var i = 0; i < item.data.length; i++) {
              legendHtml.push(
                '<li onclick="updateDataset(event, ' +
                  "'" +
                  item.data[i] +
                  "'" +
                  '); ">'
              );
              legendHtml.push(
                '<span class="chart-legend" style="background-color:' +
                  item.backgroundColor[i] +
                  '"></span>'
              );
              legendHtml.push(
                '<div class="chart-legend-label-text"><p>' +
                  chart.data.labels[i] +
                  "</p> </div>"
              );
              legendHtml.push("</li>");
            }
            legendHtml.push("</ul>");
            return legendHtml.join("");
          },
        },
      });

      var piechart = new Chart(document.querySelectorAll(".charts2"), {
        type: "pie",
        data: {
          labels: visitData,
          datasets: [
            {
              label: "Visitor",
              data: visitorData,
              backgroundColor: [
                "#005C00",
                "#008904",
                "#B9F5D8",
                "#D9FFF5",
                "#7494EA",
              ],
              borderWidth: 0,
            },
          ],
        },
        options: {
          responsive: true,
          legend: false,
          segmentShowStroke: false,
          legendCallback: function (chart) {
            var legendHtml = [];
            legendHtml.push("<ul>");
            var item = chart.data.datasets[0];
            for (var i = 0; i < item.data.length; i++) {
              legendHtml.push(
                '<li onclick="updateDataset(event, ' +
                  "'" +
                  item.data[i] +
                  "'" +
                  '); ">'
              );
              legendHtml.push(
                '<span class="chart-legend" style="background-color:' +
                  item.backgroundColor[i] +
                  '"></span>'
              );
              legendHtml.push(
                '<div class="chart-legend-label-text"><p>' +
                  chart.data.labels[i] +
                  "</p> </div>"
              );
              legendHtml.push("</li>");
            }
            legendHtml.push("</ul>");
            return legendHtml.join("");
          },
        },
      });

        var piechart = new Chart(document.querySelectorAll(".charts3"), {
          type: "pie",
          data: {
            labels: visitData,
            datasets: [
              {
                label: "Visitor",
                data: visitorData,
                backgroundColor: [
                  "#005C00",
                  "#008904",
                  "#B9F5D8",
                  "#D9FFF5",
                  "#7494EA",
                ],
                borderWidth: 0,
              },
            ],
          },
          options: {
            responsive: true,
            legend: false,
            segmentShowStroke: false,
            legendCallback: function (chart) {
              var legendHtml = [];
              legendHtml.push("<ul>");
              var item = chart.data.datasets[0];
              for (var i = 0; i < item.data.length; i++) {
                legendHtml.push(
                  '<li onclick="updateDataset(event, ' +
                    "'" +
                    item.data[i] +
                    "'" +
                    '); ">'
                );
                legendHtml.push(
                  '<span class="chart-legend" style="background-color:' +
                    item.backgroundColor[i] +
                    '"></span>'
                );
                legendHtml.push(
                  '<div class="chart-legend-label-text"><p>' +
                    chart.data.labels[i] +
                    "</p> </div>"
                );
                legendHtml.push("</li>");
              }
              legendHtml.push("</ul>");
              return legendHtml.join("");
            },
          },
        });

          var piechart = new Chart(document.querySelectorAll(".charts4"), {
            type: "pie",
            data: {
              labels: visitData,
              datasets: [
                {
                  label: "Visitor",
                  data: visitorData,
                  backgroundColor: [
                    "#005C00",
                    "#008904",
                    "#B9F5D8",
                    "#D9FFF5",
                    "#7494EA",
                  ],
                  borderWidth: 0,
                },
              ],
            },
            options: {
              responsive: true,
              legend: false,
              segmentShowStroke: false,
              legendCallback: function (chart) {
                var legendHtml = [];
                legendHtml.push("<ul>");
                var item = chart.data.datasets[0];
                for (var i = 0; i < item.data.length; i++) {
                  legendHtml.push(
                    '<li onclick="updateDataset(event, ' +
                      "'" +
                      item.data[i] +
                      "'" +
                      '); ">'
                  );
                  legendHtml.push(
                    '<span class="chart-legend" style="background-color:' +
                      item.backgroundColor[i] +
                      '"></span>'
                  );
                  legendHtml.push(
                    '<div class="chart-legend-label-text"><p>' +
                      chart.data.labels[i] +
                      "</p> </div>"
                  );
                  legendHtml.push("</li>");
                }
                legendHtml.push("</ul>");
                return legendHtml.join("");
              },
            },
          });

             var piechart = new Chart(document.querySelectorAll(".charts5"), {
               type: "pie",
               data: {
                 labels: visitData,
                 datasets: [
                   {
                     label: "Visitor",
                     data: visitorData,
                     backgroundColor: [
                       "#005C00",
                       "#008904",
                       "#B9F5D8",
                       "#D9FFF5",
                       "#7494EA",
                     ],
                     borderWidth: 0,
                   },
                 ],
               },
               options: {
                 responsive: true,
                 legend: false,
                 segmentShowStroke: false,
                 legendCallback: function (chart) {
                   var legendHtml = [];
                   legendHtml.push("<ul>");
                   var item = chart.data.datasets[0];
                   for (var i = 0; i < item.data.length; i++) {
                     legendHtml.push(
                       '<li onclick="updateDataset(event, ' +
                         "'" +
                         item.data[i] +
                         "'" +
                         '); ">'
                     );
                     legendHtml.push(
                       '<span class="chart-legend" style="background-color:' +
                         item.backgroundColor[i] +
                         '"></span>'
                     );
                     legendHtml.push(
                       '<div class="chart-legend-label-text"><p>' +
                         chart.data.labels[i] +
                         "</p> </div>"
                     );
                     legendHtml.push("</li>");
                   }
                   legendHtml.push("</ul>");
                   return legendHtml.join("");
                 },
               },
             });

             var piechart = new Chart(document.querySelectorAll(".charts6"), {
               type: "pie",
               data: {
                 labels: visitData,
                 datasets: [
                   {
                     label: "Visitor",
                     data: visitorData,
                     backgroundColor: [
                       "#005C00",
                       "#008904",
                       "#B9F5D8",
                       "#D9FFF5",
                       "#7494EA",
                     ],
                     borderWidth: 0,
                   },
                 ],
               },
               options: {
                 responsive: true,
                 legend: false,
                 segmentShowStroke: false,
                 legendCallback: function (chart) {
                   var legendHtml = [];
                   legendHtml.push("<ul>");
                   var item = chart.data.datasets[0];
                   for (var i = 0; i < item.data.length; i++) {
                     legendHtml.push(
                       '<li onclick="updateDataset(event, ' +
                         "'" +
                         item.data[i] +
                         "'" +
                         '); ">'
                     );
                     legendHtml.push(
                       '<span class="chart-legend" style="background-color:' +
                         item.backgroundColor[i] +
                         '"></span>'
                     );
                     legendHtml.push(
                       '<div class="chart-legend-label-text"><p>' +
                         chart.data.labels[i] +
                         "</p> </div>"
                     );
                     legendHtml.push("</li>");
                   }
                   legendHtml.push("</ul>");
                   return legendHtml.join("");
                 },
               },
             });

             var piechart = new Chart(document.querySelectorAll(".charts7"), {
               type: "pie",
               data: {
                 labels: visitData,
                 datasets: [
                   {
                     label: "Visitor",
                     data: visitorData,
                     backgroundColor: [
                       "#005C00",
                       "#008904",
                       "#B9F5D8",
                       "#D9FFF5",
                       "#7494EA",
                     ],
                     borderWidth: 0,
                   },
                 ],
               },
               options: {
                 responsive: true,
                 legend: false,
                 segmentShowStroke: false,
                 legendCallback: function (chart) {
                   var legendHtml = [];
                   legendHtml.push("<ul>");
                   var item = chart.data.datasets[0];
                   for (var i = 0; i < item.data.length; i++) {
                     legendHtml.push(
                       '<li onclick="updateDataset(event, ' +
                         "'" +
                         item.data[i] +
                         "'" +
                         '); ">'
                     );
                     legendHtml.push(
                       '<span class="chart-legend" style="background-color:' +
                         item.backgroundColor[i] +
                         '"></span>'
                     );
                     legendHtml.push(
                       '<div class="chart-legend-label-text"><p>' +
                         chart.data.labels[i] +
                         "</p> </div>"
                     );
                     legendHtml.push("</li>");
                   }
                   legendHtml.push("</ul>");
                   return legendHtml.join("");
                 },
               },
             });

                var piechart = new Chart(
                  document.querySelectorAll(".charts8"),
                  {
                    type: "pie",
                    data: {
                      labels: visitData,
                      datasets: [
                        {
                          label: "Visitor",
                          data: visitorData,
                          backgroundColor: [
                            "#005C00",
                            "#008904",
                            "#B9F5D8",
                            "#D9FFF5",
                            "#7494EA",
                          ],
                          borderWidth: 0,
                        },
                      ],
                    },
                    options: {
                      responsive: true,
                      legend: false,
                      segmentShowStroke: false,
                      legendCallback: function (chart) {
                        var legendHtml = [];
                        legendHtml.push("<ul>");
                        var item = chart.data.datasets[0];
                        for (var i = 0; i < item.data.length; i++) {
                          legendHtml.push(
                            '<li onclick="updateDataset(event, ' +
                              "'" +
                              item.data[i] +
                              "'" +
                              '); ">'
                          );
                          legendHtml.push(
                            '<span class="chart-legend" style="background-color:' +
                              item.backgroundColor[i] +
                              '"></span>'
                          );
                          legendHtml.push(
                            '<div class="chart-legend-label-text"><p>' +
                              chart.data.labels[i] +
                              "</p> </div>"
                          );
                          legendHtml.push("</li>");
                        }
                        legendHtml.push("</ul>");
                        return legendHtml.join("");
                      },
                    },
                  }
                );

               

              

      $(".legend-con").html(piechart.generateLegend());

      updateDataset = function (e, datasetIndex) {
        var index = datasetIndex;
        var ci = e.view.piechart;
        var meta = ci.getDatasetMeta(index);
        // See controller.isDatasetVisible comment
        meta.hidden =
          meta.hidden === null ? !ci.data.datasets[index].hidden : null;
        // We hid a dataset ... rerender the chart
        ci.update();
      };

   


// when DOM is ready
$(document).ready(function () {
  // Attach Button click event listener
  $(".registermodal").click(function () {
    // show Modal
    $("#registerModal").modal("show");
  });

  // Attach Button click event listener
  $(".loginModal").click(function () {
    // show Modal
    $("#loginModal").modal("show");
  });

  // Attach Button click event listener
  $(".followmodalshow").click(function () {
    // show Modal
    $("#followModal").modal("show");
  });

  $(".bettingcardmodal").click(function () {
    // show Modal
    $("#bettingcardid").modal("show");
  });

  $(".followmemodal").click(function () {
    // show Modal
    $("#followModal").modal("show");
  });
});
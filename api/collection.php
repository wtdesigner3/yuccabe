<?php
    require_once "db_connection.php";
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    if($_GET['filter'] != "all"){
        $cat1 = $_GET['filter'];
        $cat = "WHERE Category_ID='$cat1'";
    }else{
        $cat = "";
    }
    $sql = "
        SELECT JSON_ARRAY(
            JSON_OBJECT(
                'cat', (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'Entry_ID', c.Entry_ID,
                            'Category_ID', c.Category_ID,
                            'Category_Name', c.Category_Name
                        )
                    )
                    FROM Categories c
                ),
                'product', (
                    SELECT JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'Entry_ID', p.Entry_ID,
                            'Product_ID', p.Product_ID,
                            'Category_ID', p.Category_ID,
                            'Product_Name', p.Product_Name,
                            'Product_Subtitle', p.Product_Subtitle,
                            'Product_Description', p.Product_Description,
                            'Sizes_Image_Link', p.Sizes_Image_Link,
                            'Images', (
                                SELECT JSON_ARRAYAGG(
                                JSON_OBJECT(
                                    'Entry_ID', i.Entry_ID,
                                    'Image_ID', i.Image_ID,
                                    'Image_Link', i.Image_Link
                                )
                                )
                                FROM Images i
                                WHERE i.Product_ID = p.Product_ID
                            )
                        )
                    )
                    FROM Products p $cat
                )
            )
        ) AS json_result
    ";
    $result = $conn->query($sql);
    echo $result->fetch_assoc()['json_result'];
    $conn->close();
?>

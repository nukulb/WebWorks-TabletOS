 <%@ Page Language="C#" %>
<script runat="server">
 
 protected void Page_Load(object sender, EventArgs e)
 
    {
 //       Label1.Text = DateTime.Now.ToLongTimeString();
        Response.Buffer = false;
        Response.CacheControl = "no-cache";        
        //Response.Write(Request.RequestType);

        Response.Write(Request.QueryString["fname"] + Request.QueryString["lname"]);
		
		//Label1.Text = Response.Buffer.ToString();
    
    }
 
</script>
 